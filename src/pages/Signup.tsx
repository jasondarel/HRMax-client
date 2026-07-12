import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signupSchema, type SignupFormData } from '../validations/auth';
import { StaggerContainer, StaggerItem, FadeInRight } from '../components/Animated';
import { Button } from '../components/Button';
import { InputField } from '../components/InputField';
import { PasswordField } from '../components/PasswordField';
import { Building2, User, AtSign, Lock, ArrowRight, Check } from 'lucide-react';

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = (data: SignupFormData) => {
    console.log('Signup form submitted:', data);
    // TODO: implement signup logic
  };

  return (
    <div className="flex min-h-screen bg-background text-foreground text-left">
      {/* Left Form Section */}
      <div className="flex w-full flex-col justify-center px-8 sm:px-12 md:px-16 lg:w-1/2 lg:px-24">
        <StaggerContainer className="mx-auto w-full max-w-md">
          <StaggerItem className="mb-10">
            <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-white shadow-lg">
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
            <form className="space-y-5" onSubmit={handleSubmit(onSubmit)} noValidate>
              <InputField
                id="name"
                type="text"
                label="Full Name"
                placeholder="John Doe"
                icon={<User />}
                error={errors.name?.message}
                {...register('name')}
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

              <PasswordField
                id="password"
                label="Password"
                placeholder="••••••••"
                icon={<Lock />}
                error={errors.password?.message}
                {...register('password')}
              />

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
            <p className="mt-10 text-center text-sm text-foreground">
              Already have an account?{' '}
              <Link to="/login" className="font-semibold text-primary hover:text-accent transition-colors">
                Sign in
              </Link>
            </p>
          </StaggerItem>
        </StaggerContainer>
      </div>

      {/* Right Branding Section */}
      <div className="relative hidden w-1/2 flex-col items-center justify-center bg-surface dark:bg-bg-subtle lg:flex overflow-hidden border-l border-border-subtle">
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-[var(--color-accent)] opacity-20 blur-[100px] animate-pulse"></div>
          <div className="absolute top-[40%] -left-[10%] w-[60%] h-[60%] rounded-full bg-[var(--color-primary)] opacity-20 blur-[120px] animate-pulse" style={{ animationDelay: '1.5s' }}></div>
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
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-background shadow-sm border border-border-subtle">
                <Check className="h-5 w-5 text-primary" />
              </div>
              <p className="text-heading font-medium">Quick and easy onboarding</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-background shadow-sm border border-border-subtle">
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
