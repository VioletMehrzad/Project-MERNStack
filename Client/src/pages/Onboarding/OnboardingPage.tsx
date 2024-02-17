import { Suspense, type FC, lazy } from 'react';
import SplashScreen from './partials/SplashScreen';

const OnboardingSteps = lazy(async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return await import('./partials/OnboardingSteps');
});

const OnboardingPage: FC = () => {
  return (
    <Suspense fallback={<SplashScreen />}>
      <OnboardingSteps />
    </Suspense>
  );
};

export default OnboardingPage;
