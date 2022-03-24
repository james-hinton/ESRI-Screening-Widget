﻿///////////////////////////////////////////////////////////////////////////
// Copyright � Esri. All Rights Reserved.
//
// Licensed under the Apache License Version 2.0 (the 'License');
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an 'AS IS' BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
///////////////////////////////////////////////////////////////////////////
define({
  "units": {
    "areaSquareFeetUnit": "Kvadratne stope",
    "areaAcresUnit": "Rali",
    "areaSquareMetersUnit": "Kvadratni metri",
    "areaSquareKilometersUnit": "Kvadratni kilometri",
    "areaHectaresUnit": "Hektari",
    "areaSquareMilesUnit": "Kvadratne milje",
    "lengthFeetUnit": "Stope",
    "lengthMilesUnit": "Milje",
    "lengthMetersUnit": "Metri",
    "lengthKilometersUnit": "Kilometri"
  },
  "analysisTab": {
    "analysisTabLabel": "Analiza",
    "selectAnalysisLayerLabel": "Slojevi za analizu",
    "addLayerLabel": "Dodaj slojeve",
    "noValidLayersForAnalysis": "Nema valjanih slojeva na odabranoj web karti.",
    "noValidFieldsForAnalysis": "Nema valjanih polja na odabranoj web karti. Uklonite odabrani sloj.",
    "allowGroupingLabel": "Grupiraj geoobjekte prema polju s istom vrijednosti",
    "groupingHintDescription": "Savjet: Prema zadanim postavkama, svi geoobjekti s istom vrijednosti u odabranim poljima bit će grupirani tako da izgledaju kao jedan unosa u izvješću. Onemogući grupiranje prema jednakim atributima kako bi se umjesto toga prikazao unos za svaki geoobjekt.",
    "addLayersHintText": "Savjet: odaberite slojeve i polja za uključivanje u analizu i izvješće",
    "queryCapabilityHintText": "Bit će navedeni samo slojevi s mogućnostima upita",
    "addLayerNameTitle": "Naziv sloja",
    "addFieldsLabel": "Dodaj polje",
    "addFieldsPopupTitle": "Odaberi polja",
    "addFieldsNameTitle": "Nazivi polja",
    "aoiToolsLegendLabel": "Alati za područja interesa",
    "aoiToolsDescriptionLabel": "Odaberite i označite dostupne alate za stvaranje područja interesa.",
    "placenameLabel": "Naziv mjesta",
    "drawToolsLabel": "Izaberi alate za crtanje",
    "uploadShapeFileLabel": "Učitavanje shapefilea",
    "coordinatesLabel": "Koordinate",
    "coordinatesDrpDwnHintText": "Savjet: odaberite jedinicu za prikaz unesenih prijelaza",
    "coordinatesBearingDrpDwnHintText": "Savjet: odaberite azimut za prikaz unesenih prijelaza",
    "allowShapefilesUploadLabel": "Dopusti korisnicima da učitavaju shapefileove koje će uključiti u analizu",
    "allowShapefilesUploadLabelHintText": "Savjet: dodajte opciju na karticu Izvješće na kojoj korisnici mogu učitati svoje podatke kao shapefile za uključivanje u izvješće o analizi",
    "allowVisibleLayerAnalysisLabel": "Nemojte analizirati ili izvještavati rezultate za slojeve koji nisu vidljivi",
    "allowVisibleLayerAnalysisHintText": "Podsjetnik: slojevi koji su isključeni ili nisu vidljivi zbog postavki vidljivosti mjerila neće se analizirati ili neće biti uključeni u ispisane ili preuzete rezultate.",
    "areaUnitsLabel": "Jedinice za rezultate analize (područje)",
    "lengthUnitsLabel": "Jedinice za rezultate analize (duljina)",
    "maxFeatureForAnalysisLabel": "Maksimalni broj geobjekata za analizu",
    "maxFeatureForAnalysisHintText": "Savjet: postavite maksimalni broj geobjekata koji će biti uključeni u analizu",
    "searchToleranceLabelText": "Pretraži odstupanje",
    "searchToleranceHint": "Savjet: pretraživanje odstupanja upotrebljava se kada se analiziraju unosi linija i točaka",
    "placenameButtonText": "Naziv mjesta",
    "drawToolsButtonText": "Crtaj",
    "shapefileButtonText": "Shapefile",
    "coordinatesButtonText": "Koordinate",
    "invalidLayerErrorMsg": "Konfigurirajte polja za",
    "drawToolSelectableLayersLabel": "Izaberite slojeve koji se mogu odabrati",
    "drawToolSelectableLayersHint": "Savjet: odaberite slojeve koji sadrže geoobjekte koji se mogu odabrati pomoću značajke Odaberi alati za crtanje",
    "drawToolsSettingsFieldsetLabel": "Alati za crtanje",
    "drawToolPointLabel": "Točka",
    "drawToolPolylineLabel": "Polilinija",
    "drawToolExtentLabel": "Obuhvat",
    "drawToolPolygonLabel": "Poligon",
    "drawToolCircleLabel": "Krug",
    "selectDrawToolsText": "Odaberite dostupne alate za crtanje za stvaranje područja interesa",
    "selectingDrawToolErrorMessage": "Odaberite barem jedan alat za crtanje ili sloj odabira za upotrebu opcije Alati za crtanje za alate AOI.",
    "sortingSettingsLegend": "Postavke sortiranja",
    "ascendingLabel": "Uzlazno",
    "descendingLabel": "Silazno",
    "sortFieldSelectLabel": "Odaberi polje za sortiranje",
    "statisticsCountLabel": "Statistike: Broj",
    "statisticsTotalLengthLabel": "Statistike: Ukupna duljina",
    "statisticsTotalAreaLabel": "Statistike: Ukupna površina"
  },
  "downloadTab": {
    "downloadLegend": "Postavke preuzimanja",
    "reportLegend": "Postavke izvješća",
    "downloadTabLabel": "Preuzmi",
    "syncEnableOptionLabel": "Slojevi geoobjekta",
    "syncEnableOptionHint": "Savjet: odaberite slojeve koji se mogu preuzeti i odredite formate u kojima je svaki sloj dostupan. Preuzeti skupovi podataka uključivat će one geoobjekte koji presijecaju područje interesa.",
    "syncEnableOptionNote": "Napomena: za preuzimanje geobaze podataka i shapefileova potrebni su slojevi geoobjekata s omogućenom sinkronizacijom. Format shapefilea podržan je samo na slojevima geoobjekata hostiranim na ArcGIS Online.",
    "extractDataTaskOptionLabel": "Usluga geoprocesiranja Izdvoji podatke zadatka",
    "extractDataTaskOptionHint": "Savjet: upotrijebite objavljenu uslugu geoprocesiranja Izdvoji podatke zadatka za preuzimanje geoobjekata koji se presijecaju s područjima u datoteci geobaze podataka ili formatima shapefileova.",
    "cannotDownloadOptionLabel": "Onemogući preuzimanje",
    "syncEnableTableHeaderTitle": {
      "layerNameLabel": "Naziv sloja",
      "csvFileFormatLabel": "CSV",
      "fileGDBFormatLabel": "Geobaza podataka",
      "ShapefileFormatLabel": "Shapefile",
      "allowDownloadLabel": "Omogući preuzimanje"
    },
    "setButtonLabel": "Postavi",
    "GPTaskLabel": "Navedite url za uslugu geoprocesiranja",
    "printGPServiceLabel": "URL usluge ispisa",
    "setGPTaskTitle": "Navedite traženi URL usluge geoprocesiranja",
    "logoLabel": "Logotip",
    "logoChooserHint": "Savjet: kliknite ikonu slike da biste promijenili logotip prikazan u gornjem lijevom kutu izvješća",
    "footnoteLabel": "Fusnota",
    "columnTitleColorPickerLabel": "Boja naslova stupca izvješća",
    "reportTitleLabel": "Naziv izvješća",
    "displaySummaryLabel": "Prikaži sažetak",
    "hideZeroValueRowLabel": "Sakrij retke s vrijednosti 0 za sva polja analize",
    "hideNullValueRowLabel": "Sakrij retke s vrijednosti bez podataka (nula ili prazno) za sva polja analize",
    "errorMessages": {
      "invalidGPTaskURL": "Nevažeća usluga geoprocesiranja. Odaberite uslugu geoprocesiranja koja sadrži zadatak izdvajanja podataka.",
      "noExtractDataTaskURL": "Odaberite uslugu geoprocesiranja koja sadrži zadatak izdvajanja podataka.",
      "duplicateCustomOption": "Dvostruki unos za ${duplicateValueSizeName} postoji.",
      "invalidLayoutWidth": "Nevaljana širina unesena za ${customLayoutOptionValue}.",
      "invalidLayoutHeight": "Nevaljana visina unesena za ${customLayoutOptionValue}.",
      "invalidLayoutPageUnits": "Nevaljana jedinica stranice odabrana za ${customLayoutOptionValue}.",
      "failtofetchbuddyTaskDimension": "Pogreška prilikom dohvaćanja informacija o dimenzijama zadatka prijatelja. Pokušajte ponovno.",
      "failtofetchbuddyTaskName": "Pogreška prilikom dohvaćanja naziva zadatka prijatelja. Pokušajte ponovno.",
      "failtofetchChoiceList": "Pogreška prilikom dohvaćanja izbornog popisa s usluge ispisa. Pokušajte ponovno.",
      "invalidWidth": "Nevaljana širina.",
      "invalidHeight": "Nevaljana visina."
    },
    "addCustomLayoutTitle": "Dodaj prilagođeni izgled",
    "customLayoutOptionHint": "Savjet: dodaj izgled s usluge ispisa na popis opcija ispisa.",
    "reportDefaultOptionLabel": "Zadani izgled",
    "pageSizeUnits": {
      "millimeters": "Milimetri",
      "points": "Točke"
    },
    "noDataTextRepresentation": "Nema vrijednosti podataka",
    "naTextRepresentation": "Neprimjenjiva vrijednost",
    "noDataDefaultText": "Nema podataka",
    "notApplicableDefaultText": "Nije dostupno"
  },
  "generalTab": {
    "generalTabLabel": "Općenito",
    "tabLabelsLegend": "Oznake ploče",
    "tabLabelsHint": "Savjet: navedite oznake",
    "AOITabLabel": "Ploča područja interesa",
    "ReportTabLabel": "Ploča izvješća",
    "bufferSettingsLegend": "Postavke pojasa",
    "defaultBufferDistanceLabel": "Zadana udaljenost pojasa",
    "defaultBufferUnitsLabel": "Jedinice pojasa",
    "generalBufferSymbologyHint": "Savjet: simbologija koja se upotrebljava za označavanje područja pojasa oko definiranog područja interesa",
    "aoiGraphicsSymbologyLegend": "Simbologija područja interesa",
    "aoiGraphicsSymbologyHint": "Savjet: simbologija koja se upotrebljava za označavanje točkastih, linijskih i poligonalnih područja interesa",
    "pointSymbologyLabel": "Točka",
    "previewLabel": "Pretpregled",
    "lineSymbologyLabel": "Linija",
    "polygonSymbologyLabel": "Poligon",
    "aoiBufferSymbologyLabel": "Simbologija pojasa",
    "pointSymbolChooserPopupTitle": "Simbol adrese ili lokacije točke",
    "polygonSymbolChooserPopupTitle": "Simbol poligona",
    "lineSymbolChooserPopupTitle": "Simbol linije",
    "aoiSymbolChooserPopupTitle": "Simbol pojasa",
    "aoiTabText": "AOI",
    "reportTabText": "Izvješće",
    "invalidSymbolValue": "Nevažeća vrijednost simbola."
  },
  "searchSourceSetting": {
    "searchSourceSettingTabTitle": "Postavke izvora pretraživanja",
    "searchSourceSettingTitle": "Postavke izvora pretraživanja",
    "searchSourceSettingTitleHintText": "Dodajte i konfigurirajte usluge geokodiranja ili slojeve s geoobjektima kao izvorima pretraživanja. Ti određeni izvori određuju što se može pretražiti u okviru za pretraživanje",
    "addSearchSourceLabel": "Dodaj izvor pretraživanja",
    "featureLayerLabel": "Sloj geoobjekta",
    "geocoderLabel": "Geokoder",
    "generalSettingLabel": "Opće postavke",
    "allPlaceholderLabel": "Mjesto za unos teksta za pretraživanje svega:",
    "allPlaceholderHintText": "Savjet: unesite tekst koji će se prikazati kao mjesto za unos prilikom pretraživanja svih slojeva i geokodera",
    "generalSettingCheckboxLabel": "Prikaži skočni prozor za pronađeni geoobjekt ili lokaciju",
    "countryCode": "Pozivni broj za državu ili regiju",
    "countryCodeEg": "npr. ",
    "countryCodeHint": "Ako ostavite ovu vrijednost praznom, pretražit će se sve države i regije",
    "questionMark": "?",
    "searchInCurrentMapExtent": "Pretraži samo trenutačni obuhvat karte",
    "locatorUrl": "URL geokodera",
    "locatorName": "Naziv geokodera",
    "locatorExample": "Primjer",
    "locatorWarning": "Ova verzija usluge geokodiranja nije podržana. Widget podržava verziju usluge geokodiranja 10.0 i novije verzije.",
    "locatorTips": "Prijedlozi nisu dostupni jer usluga geokodiranja ne podržava mogućnost predlaganja.",
    "layerSource": "Izvor sloja",
    "setLayerSource": "Postavi izvor sloja",
    "setGeocoderURL": "Postavi URL geokodera",
    "searchLayerTips": "Prijedlozi nisu dostupni jer usluga geoobjekata ne podržava mogućnost numeriranja stranica.",
    "placeholder": "Mjesto za unos teksta",
    "searchFields": "Polja za pretraživanje",
    "displayField": "Polja za prikaz",
    "exactMatch": "Točno podudaranje",
    "maxSuggestions": "Maksimalni broj prijedloga",
    "maxResults": "Maksimalni rezultati",
    "enableLocalSearch": "Omogući lokalno pretraživanje",
    "minScale": "Min. mjerilo",
    "minScaleHint": "Kad je mjerilo karte veće od ovog mjerila, primijenit će se lokalno pretraživanje",
    "radius": "Polumjer",
    "radiusHint": "Određuje polumjer područja oko trenutačnog središta karte koje se upotrebljava za povećanje broja kandidata za geokodiranje kako bi se prvi prikazali kandidati koji su najbliži lokaciji",
    "setSearchFields": "Postavi polja za pretraživanje",
    "set": "Postavi",
    "invalidUrlTip": "URL ${URL} nije valjan ili dostupan.",
    "invalidSearchSources": "Nevažeće postavke pretraživanja izvora"
  },
  "errorMsg": {
    "textboxFieldsEmptyErrorMsg": "Ispunite tražena polja",
    "bufferDistanceFieldsErrorMsg": "Unesite valjane vrijednosti",
    "invalidSearchToleranceErrorMsg": "Unesite valjanu vrijednost za odstupanje pretraživanja",
    "atLeastOneCheckboxCheckedErrorMsg": "Nevažeća konfiguracija: potreban je barem jedan alat za područje interesa.",
    "noLayerAvailableErrorMsg": "Nema dostupnih slojeva",
    "layerNotSupportedErrorMsg": "Nije podržano ",
    "noFieldSelected": "Upotrijebite radnju uređivanja za odabir polja za analizu.",
    "duplicateFieldsLabels": "Duplicirajte oznaku „${labelText}” dodanu za: „${itemNames}”",
    "noLayerSelected": "Odaberite barem jedan sloj za analizu.",
    "errorInSelectingLayer": "Nije moguće odabrati sloj. Pokušajte ponovno.",
    "errorInMaxFeatureCount": "Unesite valjani maksimalni broj geoobjekata za analizu."
  }
});