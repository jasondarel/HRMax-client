import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, type LoginFormData } from '../validations/auth';
import { StaggerContainer, StaggerItem, FadeInRight } from '../components/Animated';
import { Button } from '../components/Button';
import { InputField } from '../components/InputField';
import { PasswordField } from '../components/PasswordField';
import { Building2, AtSign, Lock, ArrowRight, Check } from 'lucide-react';
import { useEffect } from 'react';

function Login() {
  useEffect(() => {
    document.title = "Log In | HRMax";
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    console.log('Login form submitted:', data);
    // TODO: implement login logic
  };

  return (
    <div className="flex min-h-screen bg-brand-bg text-foreground text-left">
      {/* Left Form Section */}
      <div className="flex w-full flex-col justify-center px-8 sm:px-12 md:px-16 lg:w-1/2 lg:px-24">
        <StaggerContainer className="mx-auto w-full max-w-md">
          <StaggerItem className="mb-10">
            <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-white shadow-lg">
              {/* Logo icon */}
              <Building2 className="h-6 w-6" />
            </div>
            <h1>
              Welcome back
            </h1>
            <p className="mt-3 text-lg text-foreground opacity-80">
              Sign in to your HRMax account to continue.
            </p>
          </StaggerItem>

          <StaggerItem>
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)} noValidate>
            <InputField
              id="email"
              type="email"
              label="Email"
              placeholder="name@company.com"
              icon={<AtSign />}
              error={errors.email?.message}
              {...register('email')}
            />

            <PasswordField
              id="password"
              label="Password"
              placeholder="••••••••"
              icon={<Lock />}
              error={errors.password?.message}
              {...register('password')}
              labelRight={
                <Link to="/forgot-password" className="text-sm font-medium text-primary hover:text-accent transition-colors">
                  Forgot password?
                </Link>
              }
            />

            <Button
              type="submit"
              disabled={isSubmitting}
              icon={
                <ArrowRight className="h-5 w-5" />
              }
            >
              {isSubmitting ? 'Signing in...' : 'Sign In'}
            </Button>
            </form>
          </StaggerItem>

          <StaggerItem>
            <p className="mt-10 text-center text-sm text-foreground">
            Don't have an account?{' '}
            <Link to="/signup" className="font-semibold text-primary hover:text-accent transition-colors">
              Create an account
            </Link>
            </p>
          </StaggerItem>
        </StaggerContainer>
      </div>

      {/* Right Branding Section */}
      <div className="relative hidden w-1/2 flex-col items-center justify-center bg-background lg:flex overflow-hidden border-l border-border-subtle">
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute -top-[10%] -left-[10%] w-[70%] h-[70%] rounded-full bg-[var(--color-primary)] opacity-25 blur-[120px] animate-blob" style={{ animationDuration: '24s' }}></div>
          <div className="absolute -bottom-[10%] -right-[10%] w-[70%] h-[70%] rounded-full bg-[var(--color-accent)] opacity-25 blur-[120px] animate-blob" style={{ animationDuration: '28s', animationDelay: '2s' }}></div>
        </div>

        <FadeInRight className="relative z-10 w-full max-w-lg px-8 text-left">
          <h2 className="mb-6 text-5xl leading-tight">
            Streamline your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              HR workflows.
            </span>
          </h2>
          <p className="text-xl text-foreground opacity-90 leading-relaxed mb-10">
            HRMax provides the ultimate platform to manage employees, track performance, and automate your daily tasks with ease.
          </p>
          
          <div className="flex gap-4">
            <div className="flex items-center gap-2 rounded-full bg-brand-bg px-5 py-2.5 text-sm font-medium shadow-sm border border-border-subtle">
              <Check className="h-5 w-5 text-primary" />
              Smart Analytics
            </div>
            <div className="flex items-center gap-2 rounded-full bg-brand-bg px-5 py-2.5 text-sm font-medium shadow-sm border border-border-subtle">
              <Check className="h-5 w-5 text-primary" />
              Automated Payroll
            </div>
          </div>
        </FadeInRight>
      </div>
    </div>
  );
}

export default Login;
