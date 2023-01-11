import React, { ReactNode } from "react";
type SectionProps = {
  title?: string;
  children: ReactNode;
};
const Section = ({ title = "my sub heading", children }: SectionProps) => {
  return (
    <div>
      <h1>{title}</h1>
      {children}
    </div>
  );
};

export default Section;
