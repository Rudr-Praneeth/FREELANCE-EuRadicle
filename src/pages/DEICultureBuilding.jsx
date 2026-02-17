import CapabilityLayout from "../layouts/CapabilityLayout";

export default function DEICultureBuilding() {
  return (
    <CapabilityLayout
      title="DEI & Culture Building"
      subtitle="Creating inclusive, values-driven cultures where trust, belonging, and performance coexist."
      image="/images/capabilities/dei-culture.jpg"
    >
      <p>
        We help organizations embed inclusive leadership behaviours and culture
        practices that drive engagement and sustainable performance.
      </p>

      <p className="text-[var(--color-primary-purple)] font-semibold cursor-pointer hover:underline">
        Know More →
      </p>

      <p>
        Strong organizational cultures are built intentionally through inclusive
        leadership, shared values, and everyday behaviors. EuRadicle’s DEI &
        Culture Building capability enables organizations to create environments
        where individuals feel respected, empowered, and able to perform at
        their best. By strengthening inclusive leadership practices and
        cross-cultural effectiveness, organizations foster trust, collaboration,
        and sustained engagement across diverse workforces.
      </p>

      <div className="space-y-6 pt-6">
        <div>
          <h3 className="text-h5 text-[var(--color-primary-navy)]">
            Women in Leadership
          </h3>
          <p>
            Advancing women in leadership goes beyond skill-building. We
            strengthen confidence, visibility, and authentic influence—enabling
            women leaders to navigate organizational dynamics and lead with
            clarity, credibility, and purpose.
          </p>
        </div>

        <div>
          <h3 className="text-h5 text-[var(--color-primary-navy)]">
            Cross-Cultural Effectiveness
          </h3>
          <p>
            Diverse teams thrive on cultural intelligence. We strengthen
            awareness, adaptability, and cross-cultural communication—enabling
            teams to build trust, collaborate effectively, and perform
            cohesively across global and diverse environments.
          </p>
        </div>
      </div>
    </CapabilityLayout>
  );
}
