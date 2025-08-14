interface Props {
    title: string;
    description: string;
    icon?: string;
}

export const FeatureCard = ({ title, description, icon }: Props) => {
  return (
    <div className="text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all hover-lift border border-gray-100">
      <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
        <span className="text-2xl">{icon}</span>
      </div>
      <h3 className="text-xl font-semibold text-accent mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};
