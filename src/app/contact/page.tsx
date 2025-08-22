export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-light tracking-wide uppercase text-gray-900 mb-4">
            Contact
          </h1>
          <div className="w-24 h-px bg-gray-300 mx-auto"></div>
        </div>

        <div className="max-w-2xl mx-auto text-center">
          <p className="text-gray-600 mb-8">Please reach out through email.</p>

          <div className="space-y-4 text-gray-700">
            <p className="text-lg">
              <a
                href="mailto:iris@irisruderman.com"
                className="text-gray-900 hover:underline"
              >
                irisruderman@gmail.com
              </a>
              <br />
              San Francisco, CA
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}