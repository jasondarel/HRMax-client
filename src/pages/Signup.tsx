import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signupSchema, type SignupFormData } from '../validations/auth';
import { StaggerContainer, StaggerItem, FadeInRight } from '../components/Animated';
import { Button } from '../components/Button';
import { InputField } from '../components/InputField';
import { PasswordField } from '../components/PasswordField';
import { Building2, User, AtSign, Lock, ArrowRight, Check } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '../utils';
import { getCountries, registerUser } from '../services/api';

function Signup() {
  const navigate = useNavigate();
  const [countries, setCountries] = useState<{name: string, iso_code: string, dial_code: string}[]>([]);
  const [serverError, setServerError] = useState('');
  useEffect(() => {
    document.title = "Sign Up | HRMax";
    const fetchCountries = async () => {
      try {
        const data = await getCountries();
        setCountries(data);
      } catch (err) {
        console.error("Failed to load countries", err);
      }
    };
    fetchCountries();
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      countryCode: 'US',
    }
  });

  const onSubmit = async (data: SignupFormData) => {
    setServerError('');
    try {
      await registerUser({
        name: data.name,
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,
        phoneInformation: {
          countryCode: data.countryCode,
          phoneNumber: data.phone,
        }
      });
      navigate('/verify-otp', { state: { email: data.email } });
    } catch (err) {
      if (err instanceof Error) {
        setServerError(err.message || 'Registration failed');
      } else {
        setServerError('Registration failed');
      }
    }
  };

  return (
    <div className="flex min-h-screen bg-brand-bg text-foreground text-left">
      {/* Left Form Section */}
      <div className="flex w-full flex-col justify-center px-8 sm:px-12 md:px-16 lg:w-1/2 lg:px-24">
        <StaggerContainer className="mx-auto w-full max-w-md my-8">
          <StaggerItem className="mb-4">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-white shadow-lg">
              {/* Logo icon */}
              <Building2 className="h-6 w-6" />
            </div>
            <h1>
              Create an account
            </h1>
            <p className="mt-3 text-lg text-foreground opacity-80">
              Join HRMax and start managing your team today.
            </p>
          </StaggerItem>

          <StaggerItem>
            {serverError && (
              <div className="mb-4 rounded-xl bg-red-50 p-4 text-sm text-red-500 border border-red-200">
                {serverError}
              </div>
            )}
            <form className="space-y-3" onSubmit={handleSubmit(onSubmit)} noValidate>
              <InputField
                id="name"
                type="text"
                label="Full Name"
                placeholder="John Doe"
                icon={<User />}
                error={errors.name?.message}
                {...register('name')}
                onInput={(e) => {
                  e.currentTarget.value = e.currentTarget.value.replace(/[0-9]/g, '');
                }}
              />

              <InputField
                id="email"
                type="email"
                label="Email"
                placeholder="name@company.com"
                icon={<AtSign />}
                error={errors.email?.message}
                {...register('email')}
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <PasswordField
                  id="password"
                  label="Password"
                  placeholder="••••••••"
                  icon={<Lock />}
                  error={errors.password?.message}
                  {...register('password')}
                />

                <PasswordField
                  id="confirmPassword"
                  label="Confirm Password"
                  placeholder="••••••••"
                  icon={<Lock />}
                  error={errors.confirmPassword?.message}
                  {...register('confirmPassword')}
                />
              </div>

              <div className="space-y-1">
                <label className="block text-sm font-semibold text-heading" htmlFor="phone">
                  Phone Number
                </label>
                <div className="flex gap-2">
                  <div className="relative w-1/3 sm:w-1/4">
                    <select
                      id="countryCode"
                      className={cn(
                        "block w-full appearance-none rounded-xl border border-border-subtle bg-white/70 dark:bg-bg-subtle",
                        "px-4 py-2.5 text-heading transition-all focus:outline-none focus:ring-2 focus:ring-opacity-20 shadow-sm",
                        errors.countryCode ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "focus:border-primary focus:ring-primary"
                      )}
                      {...register('countryCode')}
                    >
                      <option value="">Code</option>
                      {countries.map((country) => (
                        <option key={country.iso_code} value={country.iso_code}>
                          {country.dial_code} ({country.iso_code})
                        </option>
                      ))}
                    </select>
                    {/* Optional custom dropdown indicator can go here if needed, but native select arrow is fine */}
                  </div>
                  <div className="relative flex-1">
                    <input
                      id="phone"
                      type="tel"
                      placeholder="Phone number"
                      className={cn(
                        "block w-full rounded-xl border border-border-subtle bg-white/70 dark:bg-bg-subtle",
                        "px-4 py-2.5 text-heading transition-all focus:outline-none focus:ring-2 focus:ring-opacity-20 shadow-sm",
                        errors.phone ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "focus:border-primary focus:ring-primary"
                      )}
                      {...register('phone')}
                      onInput={(e) => {
                        e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, '');
                      }}
                    />
                  </div>
                </div>
                {(errors.countryCode || errors.phone) && (
                  <p className="text-sm text-red-500">{errors.phone?.message || errors.countryCode?.message}</p>
                )}
              </div>

            <Button
              type="submit"
              className="mt-4"
              disabled={isSubmitting}
              icon={
                <ArrowRight className="h-5 w-5" />
              }
            >
              {isSubmitting ? 'Signing up...' : 'Sign Up'}
            </Button>
            </form>
          </StaggerItem>

          <StaggerItem>
            <p className="mt-6 text-center text-sm text-foreground">
              Already have an account?{' '}
              <Link to="/login" className="font-semibold text-primary hover:text-accent transition-colors">
                Sign in
              </Link>
            </p>
          </StaggerItem>
        </StaggerContainer>
      </div>

      {/* Right Branding Section */}
      <div className="relative hidden w-1/2 flex-col items-center justify-center bg-background lg:flex overflow-hidden border-l border-border-subtle">
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute -top-[10%] -right-[10%] w-[70%] h-[70%] rounded-full bg-[var(--color-accent)] opacity-25 blur-[120px] animate-blob" style={{ animationDuration: '24s' }}></div>
          <div className="absolute -bottom-[10%] -left-[10%] w-[70%] h-[70%] rounded-full bg-[var(--color-primary)] opacity-25 blur-[120px] animate-blob" style={{ animationDuration: '28s', animationDelay: '2s' }}></div>
        </div>

        <FadeInRight className="relative z-10 w-full max-w-lg px-8 text-left">
          <h2 className="mb-6 text-5xl leading-tight">
            Unlock your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              team's potential.
            </span>
          </h2>
          <p className="text-xl text-foreground opacity-90 leading-relaxed mb-10">
            Join thousands of forward-thinking companies that rely on HRMax to scale their operations and empower their employees.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-bg shadow-sm border border-border-subtle">
                <Check className="h-5 w-5 text-primary" />
              </div>
              <p className="text-heading font-medium">Quick and easy onboarding</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-bg shadow-sm border border-border-subtle">
                <Check className="h-5 w-5 text-primary" />
              </div>
              <p className="text-heading font-medium">Bank-grade security</p>
            </div>
          </div>
        </FadeInRight>
      </div>
    </div>
  );
}

export default Signup;
