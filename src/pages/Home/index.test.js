import React from "react";
import { render } from "@testing-library/react";
import Home from "./index";

test("page should have a title of Ionic React Todos", async () => {
  let abstract =
    "Languages of Indigenous Australians reflect the culture and the place it was originated from, it important to keep the language alive that carries the culture. This study will work with the Dharug Dalang language sharing domain through the language gathering process on the interactive interface. The notion of Gathering is used as an approach to accumulate Dharug Dalang resources from the experienced speakers of the language. The application provides the possibility to collect all the resource from existing language transcripts and also categorise the sentences. The translations will be provided by the language experts and this material will be used for learning practice. This study is with regard to gathering Dalang or language. This case study approach will also provide the material to support a companion learning app which is developed in consultation with the developers of the open source Listen N Talk app. The implementation will involve progressive web application and use Test Driven Development to ensure a robust and flexible product. In particular, the aim is to make an interactive interface for the linguist experts to share transcripts of their language through the application, to help students in school and who wish to work with the language community. The application will be tested for suitability in gathering a specific language as a trial. This will help preserve and ensure the survival of the language.";

  const { findByText } = render(<Home />);
  await findByText(abstract);
});
