export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-light tracking-wide uppercase text-gray-900 mb-4">
            About
          </h1>
          <div className="w-24 h-px bg-gray-300 mx-auto"></div>
        </div>

        <div className="prose prose-lg mx-auto text-gray-700">
          <p>
            Iris Ruderman is a photographer exploring themes of memory,
            identity, and place through intimate documentary work and
            portraiture. Her work examines the complex relationships between
            people and their environments, capturing moments that reveal deeper
            truths about human experience.
          </p>

          <p>
            Through various series including memorial tattoos, female
            artists&apos; spaces, and special places, Ruderman creates visual
            narratives that invite viewers to consider their own connections to
            memory and place.
          </p>

          <p>
            Her photography has been exhibited in galleries and featured in
            publications focusing on contemporary documentary photography and
            social issues.
          </p>
        </div>
      </div>
    </div>
  );
}