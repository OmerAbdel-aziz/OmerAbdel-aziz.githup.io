import { Button, Input, Textarea, Typography } from "@material-tailwind/react";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const location = [10.5611937, 27.3402381];

const Contact = () => {
  return (
    <div
      className="flex w-full flex-col bg-white relative top-[555px] "
      id="contact"
    >
      <section className="px-8 py-8 lg:py-16">
        <div className="container mx-auto text-center">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl ">
              Contact Us
            </h2>
            <p className="mt-2 text-lg text-gray-600">
              We would love to hear from you!
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-2 items-start">
            <div className="z-10 rounded-lg overflow-clip ">
              <MapContainer
                center={location}
                zoom={13}
                style={{ height: "430px", width: "100%" }}
              >
                {/* TileLayer renders the map tiles from OpenStreetMap */}
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {/* Marker pin at the specified location */}
                <Marker position={location}>
                  <Popup>Our Location</Popup>
                </Marker>
              </MapContainer>
            </div>
            <form action="#" className="flex flex-col gap-4 lg:max-w-lg ml-10">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Typography
                    variant="small"
                    className="mb-2 text-left font-medium !text-gray-900"
                  >
                    First Name
                  </Typography>
                  <Input
                    color="gray"
                    size="lg"
                    placeholder="First Name"
                    name="first-name"
                    className="border-none  "
                    containerProps={{
                      className: "!min-w-full",
                    }}
                    labelProps={{
                      className: "hidden",
                    }}
                  />
                </div>
                <div>
                  <Typography
                    variant="small"
                    className="mb-2 text-left font-medium !text-gray-900"
                  >
                    Last Name
                  </Typography>
                  <Input
                    color="gray"
                    size="lg"
                    placeholder="Last Name"
                    name="last-name"
                    className="border-white "
                    containerProps={{
                      className: "!min-w-full border-none",
                    }}
                    labelProps={{
                      className: "hidden ",
                    }}
                  />
                </div>
              </div>
              <div>
                <Typography
                  variant="small"
                  className="mb-2 text-left font-medium !text-gray-900"
                >
                  Your Email
                </Typography>
                <Input
                  color="gray"
                  size="lg"
                  placeholder="name@email.com"
                  name="email"
                  className="border-none "
                  containerProps={{
                    className: "!min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>
              <div>
                <Typography
                  variant="small"
                  className="mb-2 text-left font-medium !text-gray-900"
                >
                  Your Message
                </Typography>
                <Textarea
                  rows={6}
                  color="gray"
                  size="lg"
                  placeholder="Message"
                  name="message"
                  className="border-none "
                  containerProps={{
                    className: "!min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>
              <button
                type="submit"
                className="block w-full rounded-md bg-[#1E1E1E] hover:bg-[#637C65] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#637C65] "
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
