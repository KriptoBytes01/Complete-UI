import Image from "next/image";

export default function Stories() {
  return (
    <>
      <div className="bg-black text-white p-10">
        <h1 className="text-white text-2xl md:text-5xl text-center font-semibold md:mt-14 mt-2 md:mb-16">
          Selected {`Clients'`} Success Stories
        </h1>

        <div className="grid md:mx-24 mt-8 mb-20 grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Column - Two Stacked Boxes */}
          <div className="md:col-span-2 flex flex-col gap-6">
            {/* First Box */}
            <div className="bg-gray-800 flex flex-col md:flex-row">
              {/* Image for mobile view */}
              <div className="w-full md:w-1/2 md:p-4">
                <div className="w-full md:hidden">
                  <Image
                    width={100}
                    height={100}
                    src="/client1.png"
                    alt="Client Story 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Text Section */}
                <div className="flex flex-row px-4 py-3 gap-2 md:mb-4">
                  <div className="bg-gray-600 w-fit p-1">Artificial Intelligence</div>
                  <div className="bg-gray-600 w-fit p-1">Hi-Tech</div>
                </div>
                <h2 className="text-xl font-bold px-4 mb-2">Client Story 1</h2>
                <p className="text-gray-300 px-4 py-3">
                  This is a brief description of the success story, showcasing impactful results.
                </p>
              </div>
              {/* Image for large screen */}
              <div className="w-full md:flex hidden md:w-1/2">
                <Image
                  width={100}
                  height={100}
                  src="/client1.png"
                  alt="Client Story 1"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Second Box */}
            <div className="bg-gray-800 flex flex-col md:flex-row">
              {/* Image Section */}
              <div className="w-full md:w-1/2">
                <Image
                  width={100}
                  height={100}
                  src="/client2.png"
                  alt="Client Story 2"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Text Section */}
              <div className="w-full md:w-1/2 md:p-4">
                <div className="flex px-4 flex-row gap-2 mt-4 mb-4">
                  <div className="bg-gray-600 w-fit p-1">Artificial Intelligence</div>
                  <div className="bg-gray-600 w-fit p-1">Hi-Tech</div>
                </div>
                <h2 className="text-xl font-bold px-4 mb-2">Client Story 2</h2>
                <p className="text-gray-300 px-4 py-2">
                  This is a description of the client’s journey with our assistance, leading to great outcomes.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Single Box */}
          <div className="bg-gray-800 items-center flex flex-col">
            {/* image for mobile view */}
            <div className="w-full md:h-1/2 ">
              <div className="w-full md:hidden">
                <Image
                  width={200}
                  height={100}
                  src="/client3.png"
                  alt="Client Story 3"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Text Section */}
              <div className="flex flex-row gap-2 px-4 py-5 md:mb-4">
                <div className="bg-gray-600 w-fit p-1">Artificial Intelligence</div>
                <div className="bg-gray-600 w-fit p-1">Hi-Tech</div>
              </div>
              <h2 className="text-xl font-bold px-4 md:mb-2">Client Story 3</h2>
              <p className="text-gray-300 px-4 py-2">
                This story highlights the unique strategies and results achieved for this client.
              </p>
            </div>
            {/* Image Section */}
            <div className="w-full hidden md:flex md:h-1/2">
              <Image
                width={200}
                height={100}
                src="/client3.png"
                alt="Client Story 3"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
