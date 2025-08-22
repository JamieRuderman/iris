export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-light tracking-wide uppercase text-gray-900 mb-4">
            About
          </h1>
          <div className="w-24 h-px bg-gray-300 mx-auto"></div>
        </div>

        <div className="prose prose-lg mx-auto text-gray-700">
          <p className="mb-3">
            My name is Iris Ruderman. I am a photographer working in black and
            white film photography. I focus mainly on portraits, and I love to
            explore themes of femininity, community, interpersonal connection,
            and home.
          </p>

          <p className="mb-3">
            I love to work in the dark room and experiment with printing
            techniques as well as various multimedia approaches post-printing.
          </p>

          <p>Please reach out via email with any inquiries.</p>

          <div className="mt-10">
            <h2 className="text-xl font-medium text-gray-900 mb-4">
              Education
            </h2>
            <p className="mb-2">Santa Rosa Junior College: 2021-2025</p>
            <p>San Francisco State University: 2025-Present</p>
          </div>
        </div>
      </div>
    </div>
  );
}