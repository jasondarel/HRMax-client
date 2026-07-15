import { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { StaggerContainer, StaggerItem, FadeInRight } from '../components/Animated';
import { Button } from '../components/Button';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import { cn } from '../utils';
import { verifyRegisterOTP } from '../services/api';
import Cookies from 'js-cookie';

export default function VerifyOTP() {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    document.title = 'Verify OTP | HRMax';
    if (!email) {
      navigate('/signup');
      return;
    }
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, [email, navigate]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    
    if (value.length > 1) {
      const pastedCode = value.slice(0, 6).split('');
      for (let i = 0; i < pastedCode.length; i++) {
        if (index + i < 6) {
          newOtp[index + i] = pastedCode[i];
        }
      }
      setOtp(newOtp);
      
      const nextEmptyIndex = newOtp.findIndex(val => val === '');
      const focusIndex = nextEmptyIndex === -1 ? 5 : nextEmptyIndex;
      inputRefs.current[focusIndex]?.focus();
      return;
    }

    newOtp[index] = value;
    setOtp(newOtp);

    if (value !== '' && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const code = otp.join('');
    
    if (code.length !== 6) {
      setError('Please enter all 6 digits');
      return;
    }
    
    setError('');
    setIsSubmitting(true);
    
    try {
      if (!email) throw new Error('Email is required');
      const response = await verifyRegisterOTP({ email, otpCode: code });
      
      Cookies.set('user', JSON.stringify({ 
        name: response.data.name, 
        role: response.data.role 
      }), { expires: 1 });

      if (response.data?.role === 'TENANT ADMIN') {
        navigate('/dashboard-admin');
      } else {
        navigate('/login');
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || 'Invalid verification code');
      } else {
        setError('Invalid verification code');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-brand-bg text-foreground text-left">
      <div className="flex w-full flex-col justify-center px-8 sm:px-12 md:px-16 lg:w-1/2 lg:px-24">
        <StaggerContainer className="mx-auto w-full max-w-md my-8">
          <StaggerItem className="mb-4">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-white shadow-lg">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h1>Check your email</h1>
            <p className="mt-3 text-lg text-foreground opacity-80">
              We've sent a 6-digit verification code to your email. Enter it below to verify your account.
            </p>
          </StaggerItem>

          <StaggerItem>
            {error && (
              <div className="mb-6 rounded-xl bg-red-50 p-4 text-sm text-red-500 border border-red-200">
                {error}
              </div>
            )}
            
            <form className="space-y-8" onSubmit={onSubmit}>
              <div className="flex justify-between gap-2">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => { inputRefs.current[index] = el; }}
                    type="text"
                    inputMode="numeric"
                    autoComplete="one-time-code"
                    maxLength={6}
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className={cn(
                      "w-12 h-14 sm:w-14 sm:h-16 text-center text-2xl font-semibold rounded-xl border-2 bg-background shadow-sm transition-all outline-none",
                      digit ? "border-primary text-primary" : "border-border-subtle focus:border-accent text-foreground",
                      "focus:ring-4 focus:ring-accent/20 focus:scale-105"
                    )}
                  />
                ))}
              </div>

              <div className="flex justify-between items-center px-1">
                <span className="text-sm text-foreground opacity-60">Didn't receive code?</span>
                <button type="button" className="text-sm font-medium text-accent hover:text-primary transition-colors">
                  Resend Code
                </button>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                icon={!isSubmitting ? <ArrowRight className="h-5 w-5" /> : undefined}
              >
                {isSubmitting ? 'Verifying...' : 'Verify Account'}
              </Button>
            </form>
          </StaggerItem>
        </StaggerContainer>
      </div>

      <div className="hidden lg:block lg:w-1/2 relative overflow-hidden bg-primary/10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent mix-blend-multiply" />
        <div className="absolute inset-0 flex items-center justify-center p-12">
          <FadeInRight className="relative max-w-lg w-full aspect-square rounded-[2rem] bg-white shadow-2xl p-8 flex flex-col items-center justify-center text-center overflow-hidden border border-white/50">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
            <div className="h-24 w-24 rounded-full bg-gradient-to-br from-primary to-accent mb-8 shadow-xl flex items-center justify-center text-white animate-bounce">
              <ShieldCheck className="h-12 w-12" />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Secure Your Account</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-md">
              We use one-time passwords to ensure your HRMax account remains secure and protected at all times.
            </p>
            <div className="flex gap-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="w-4 h-4 rounded-full bg-primary/20 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
              ))}
            </div>
          </FadeInRight>
        </div>
      </div>
    </div>
  );
}
