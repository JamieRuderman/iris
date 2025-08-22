export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-light tracking-wide uppercase text-gray-900 mb-4">
            Contact
          </h1>
          <div className="w-24 h-px bg-gray-300 mx-auto"></div>
        </div>

        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg text-gray-600 mb-8">
            For inquiries about prints, exhibitions, or collaborations, please get in touch.
          </p>
          
          <div className="space-y-4 text-gray-700">
            <p>
              <span className="font-medium">Email:</span>{' '}
              <a 
                href="mailto:iris@irisruderman.com" 
                className="text-gray-900 hover:underline"
              >
                iris@irisruderman.com
              </a>
            </p>
            
            <p>
              <span className="font-medium">Based in:</span> New York, NY
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
