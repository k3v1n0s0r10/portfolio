import {
  FadeAnimations,
  FlipAnimations,
  SlideAnimations,
  ZoomAnimations,
} from "../@types/animations";

interface RevealDivProps {
  className?: string;
  animation: FadeAnimations | SlideAnimations | ZoomAnimations | FlipAnimations;
  duration?: string;
  delay?: string;
  offset?: string;
}

const RevealDiv: React.FC<RevealDivProps> = ({
  duration = "500",
  delay = "100",
  offset = "200",
  animation,
  children,
  className,
}) => {
  return (
    <div
      data-aos={animation}
      data-aos-duration={duration}
      data-aos-offset={offset}
      data-aos-delay={delay}
      className={className}
    >
      {children}
    </div>
  );
};

export default RevealDiv;
