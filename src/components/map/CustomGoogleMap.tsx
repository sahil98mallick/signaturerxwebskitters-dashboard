import { Loader } from "@googlemaps/js-api-loader";
import { MarkerClusterer } from "@googlemaps/markerclusterer";
import { Box } from "@mui/material";
import assest from "json/assest";
import events from "json/events/events";
import {
  IfindPharmacyMock,
  findPharmacyMock
} from "json/mock/findpharmacy.mock";
import eventEmitter from "lib/services/event.emitter";
import { useCallback, useEffect, useRef, useState } from "react";
import "./map.scss";

const loader = new Loader({
  apiKey: "",
  version: "weekly"
});

interface ImarkersData {
  latitude: number;
  longitude: number;
  title?: string;
}

const CustomGoogleMap = () => {
  const [zoom, setZoom] = useState(8);
  const previousactiveMarker = useRef<HTMLDivElement | null>(null);

  function createZoomButton(map: google.maps.Map) {
    const controlButton = document.createElement("button");
    controlButton.classList.add("control_btn");
    controlButton.textContent = "+";
    controlButton.title = "Click to zoom";
    controlButton.type = "button";
    controlButton.addEventListener("click", () => {
      const currentZoom = map.getZoom() || zoom;
      map.setZoom(currentZoom + 1);
    });

    return controlButton;
  }

  function createZoomOutButton(map: google.maps.Map) {
    const controlButton = document.createElement("button");
    controlButton.classList.add("control_btn");
    controlButton.classList.add("minus_btn");

    controlButton.innerHTML = "<span></span>";
    controlButton.title = "Click to zoom";
    controlButton.type = "button";

    controlButton.addEventListener("click", () => {
      const currentZoom = map.getZoom() || zoom;
      map.setZoom(currentZoom - 1);
    });
    return controlButton;
  }

  /* The `convertStringLatLng` function is a callback function that takes a `location` object of type
`ImarkersData` as a parameter. It converts the latitude and longitude values from the `location`
object into a `google.maps.LatLng` object and returns an object with `lat` and `lng` properties
representing the latitude and longitude values, respectively. */
  const convertStringLatLng = useCallback((location: ImarkersData) => {
    const latLng = new google.maps.LatLng(
      location.latitude,
      location.longitude
    );
    return { lat: latLng.lat(), lng: latLng.lng() };
  }, []);

  /**
   * The function `CreateMarker` creates a custom marker element on a Google Map using the provided data.
   * @param map - The `map` parameter is an instance of the `google.maps.Map` class, which represents a
   * Google Map.
   * @param AdvancedMarkerElement - The `AdvancedMarkerElement` parameter is a custom marker element
   * class provided by the Google Maps API. It is used to create a custom marker on the map.
   * @param {IfindPharmacyMock} data - The `data` parameter is an object of type `IfindPharmacyMock`. It
   * contains information about a pharmacy, such as its name, location, and other details.
   * @returns The function `CreateMarker` is returning a `markerView` object.
   */
  const CreateMarker = (
    map: google.maps.Map,
    AdvancedMarkerElement: typeof google.maps.marker.AdvancedMarkerElement,
    data: IfindPharmacyMock
  ) => {
    const _markerHTML = document.createElement("div");
    _markerHTML.className = "markerDiv";
    _markerHTML.innerHTML = `
      <div class='innerDiv' >
          <svg
        xmlns="http://www.w3.org/2000/svg"
        width="56"
        height="63"
        viewBox="0 0 56 63"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M33.9372 57.4787C35.1463 56.254 36.6569 55.3953 38.2483 54.761C48.6429 50.6182 56 40.3596 56 28.3605C56 12.6974 43.4639 0 28 0C12.536 0 0 12.6974 0 28.3605C0 40.1905 7.15119 50.3286 17.314 54.5822C18.8278 55.2158 20.2638 56.054 21.422 57.227L26.6392 62.5113C27.2824 63.1629 28.3252 63.1629 28.9684 62.5113L33.9372 57.4787Z"
          fill="white"
        />
      </svg>

      <img src='${assest.markerbg}' />
      
      </div>
    `;

    const markerView = new AdvancedMarkerElement({
      position: convertStringLatLng(data),
      map,
      title: data?.pharmacy_name || "",
      collisionBehavior:
        google.maps.CollisionBehavior.REQUIRED_AND_HIDES_OPTIONAL,
      zIndex: Number(google.maps.Marker.MAX_ZINDEX),
      content: _markerHTML
    });

    markerView.addListener("click", () => {
      // Emit marker clicked event with data

      eventEmitter.emit(events.map.markerClicked, data);

      if (!!previousactiveMarker.current) {
        previousactiveMarker.current.classList.remove("active");
      }
      previousactiveMarker.current = _markerHTML;
      previousactiveMarker.current.classList.add("active");
    });

    return markerView;
  };

  useEffect(() => {
    loader.load().then(async () => {
      const { Map } = (await google.maps.importLibrary(
        "maps"
      )) as google.maps.MapsLibrary;
      const { AdvancedMarkerElement } = (await google.maps.importLibrary(
        "marker"
      )) as google.maps.MarkerLibrary;

      /* The code is creating a new instance of the `google.maps.Map` class, which represents a Google Map.
It takes two parameters: the first parameter is the HTML element with the id "map" where the map
will be rendered, and the second parameter is an object containing various options for configuring
the map. */
      const _map: google.maps.Map = new Map(
        document.getElementById("map") as HTMLElement,
        {
          center: { lat: -34.397, lng: 150.644 },
          zoom,
          minZoom: 4,
          mapTypeControl: false,
          zoomControl: false,
          zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_TOP
          },
          scaleControl: false,
          streetViewControl: false,
          fullscreenControl: false,
          mapId: "map"
        }
      );

      /* The code is creating custom zoom buttons for the Google Map. */
      let zoomOutControlDiv = document.createElement("div");
      zoomOutControlDiv.classList.add("zoom_out");

      const zoomOutControl = createZoomOutButton(_map);
      zoomOutControlDiv.appendChild(zoomOutControl);

      const zoomControlDiv = document.createElement("div");
      zoomControlDiv.classList.add("zoom_in");

      const zoomControl = createZoomButton(_map);
      zoomControlDiv.appendChild(zoomControl);

      _map.controls[google.maps.ControlPosition.TOP_RIGHT].push(zoomControlDiv);
      _map.controls[google.maps.ControlPosition.TOP_RIGHT].push(
        zoomOutControlDiv
      );

      // Add the marker clusterer to the map.
      /* The code is creating markers on the Google Map for each pharmacy in the `findPharmacyMock`
      array. */
      const markers: google.maps.Marker[] = [];

      findPharmacyMock.forEach((markerData) => {
        const marker = CreateMarker(_map, AdvancedMarkerElement, markerData);
        markers.push(marker as unknown as google.maps.Marker);
      });

      new MarkerClusterer({
        map: _map,
        markers
      });
    });
  }, [findPharmacyMock]);

  return (
    <Box>
      <div id="map"></div>;
    </Box>
  );
};

export default CustomGoogleMap;
