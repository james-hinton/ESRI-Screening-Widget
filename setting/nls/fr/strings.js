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
    "areaSquareFeetUnit": "Pieds carrés",
    "areaAcresUnit": "Acres",
    "areaSquareMetersUnit": "Mètres carrés",
    "areaSquareKilometersUnit": "Kilomètres carrés",
    "areaHectaresUnit": "Hectares",
    "areaSquareMilesUnit": "Miles carrés",
    "lengthFeetUnit": "Pieds",
    "lengthMilesUnit": "Miles",
    "lengthMetersUnit": "Mètres",
    "lengthKilometersUnit": "Kilomètres"
  },
  "analysisTab": {
    "analysisTabLabel": "Analyse",
    "selectAnalysisLayerLabel": "Couches d'analyse",
    "addLayerLabel": "Ajouter des couches",
    "noValidLayersForAnalysis": "Couches valides introuvables dans la carte web sélectionnée.",
    "noValidFieldsForAnalysis": "Champs valides introuvables dans la carte web sélectionnée. Supprimez la couche sélectionnée.",
    "allowGroupingLabel": "Regrouper les entités par champ de même valeur",
    "groupingHintDescription": "Astuce : par défaut, toutes les entités présentant une valeur identique pour les champs sélectionnés sont regroupées dans une même entrée du rapport. Désactivez le regroupement par attributs similaires pour afficher une entrée pour chaque entité.",
    "addLayersHintText": "Astuce : choisissez les couches et champs à inclure dans l’analyse et le rapport",
    "queryCapabilityHintText": "Seules les couches avec des capacités de requête seront répertoriées",
    "addLayerNameTitle": "Nom de la couche",
    "addFieldsLabel": "Ajouter un champ",
    "addFieldsPopupTitle": "Sélectionner des champs",
    "addFieldsNameTitle": "Noms de champs",
    "aoiToolsLegendLabel": "Outils Zone d’intérêt",
    "aoiToolsDescriptionLabel": "Choisissez et étiquetez les outils disponibles pour créer la zone d’intérêt.",
    "placenameLabel": "Nom de lieu",
    "drawToolsLabel": "Choisir les outils de dessin",
    "uploadShapeFileLabel": "Charger un shapefile",
    "coordinatesLabel": "Coordonnées",
    "coordinatesDrpDwnHintText": "Astuce : choisissez l’unité d’affichage des cheminements saisis",
    "coordinatesBearingDrpDwnHintText": "Astuce : choisissez le relèvement d’affichage des cheminements saisis",
    "allowShapefilesUploadLabel": "Autoriser les utilisateurs à charger des shapefiles afin de les inclure dans l’analyse",
    "allowShapefilesUploadLabelHintText": "Astuce : ajoutez une option dans l’onglet Rapport, où les utilisateurs peuvent charger leurs propres données en tant que shapefile à inclure dans le rapport d’analyse",
    "allowVisibleLayerAnalysisLabel": "Ne pas analyser ou signaler les résultats pour les couches qui ne sont pas visibles",
    "allowVisibleLayerAnalysisHintText": "Conseil : Les couches qui ont été désactivées ou qui ne sont pas visibles en raison des paramètres de visibilité d’échelle ne seront pas analysées ou incluses dans les résultats imprimés ou téléchargés.",
    "areaUnitsLabel": "Unités des résultats d’analyse (Surface)",
    "lengthUnitsLabel": "Unités des résultats d’analyse (Longueur)",
    "maxFeatureForAnalysisLabel": "Nombre maximal d’entités à analyser",
    "maxFeatureForAnalysisHintText": "Astuce : définissez le nombre maximal d’entités à inclure dans l’analyse",
    "searchToleranceLabelText": "Tolérance de recherche",
    "searchToleranceHint": "Astuce : la tolérance de recherche est utilisée lors de l’analyse d’entrées ponctuelles et linéaires",
    "placenameButtonText": "Nom de lieu",
    "drawToolsButtonText": "Dessin",
    "shapefileButtonText": "Fichier de formes",
    "coordinatesButtonText": "Coordonnées",
    "invalidLayerErrorMsg": "Configurez les champs pour",
    "drawToolSelectableLayersLabel": "Choisir les couches sélectionnables",
    "drawToolSelectableLayersHint": "Astuce : choisissez les couches qui contiennent des entités pouvant être sélectionnées à l’aide de l’outil Sélectionner un dessin",
    "drawToolsSettingsFieldsetLabel": "Outils de dessin",
    "drawToolPointLabel": "Point",
    "drawToolPolylineLabel": "Polyligne",
    "drawToolExtentLabel": "Etendue",
    "drawToolPolygonLabel": "Polygone",
    "drawToolCircleLabel": "Cercle",
    "selectDrawToolsText": "Choisissez les outils de dessin disponibles pour créer la zone d’intérêt",
    "selectingDrawToolErrorMessage": "Choisissez au moins un outil de dessin ou une couche de sélection afin d’utiliser l’option Outils de dessin pour Outils AOI.",
    "sortingSettingsLegend": "Paramètres de tri",
    "ascendingLabel": "Croissant",
    "descendingLabel": "Décroissant",
    "sortFieldSelectLabel": "Sélectionner un champ de tri",
    "statisticsCountLabel": "Statistiques : total",
    "statisticsTotalLengthLabel": "Statistiques : longueur totale",
    "statisticsTotalAreaLabel": "Statistiques : surface totale"
  },
  "downloadTab": {
    "downloadLegend": "Paramètres de téléchargement",
    "reportLegend": "Paramètres du rapport",
    "downloadTabLabel": "Télécharger",
    "syncEnableOptionLabel": "Couches d'entités",
    "syncEnableOptionHint": "Astuce : choisissez les couches qui peuvent être téléchargées et spécifiez les formats dans lesquels chaque couche est disponible. Les jeux de données téléchargés comprendront les entités qui intersectent la zone d’intérêt.",
    "syncEnableOptionNote": "Remarque : le téléchargement des géodatabases fichier et des shapefiles requiert des couches d’entités pour lesquelles la synchronisation est activée. Le format des shapefiles est uniquement pris en charge avec les couches d’entités hébergées ArcGIS Online.",
    "extractDataTaskOptionLabel": "Tâche Exporter les données du service de géotraitement",
    "extractDataTaskOptionHint": "Astuce : utilisez un service de géotraitement contenant une tâche Extraire des données publiée pour télécharger les entités qui intersectent la zone d’intérêt dans les formats des géodatabases fichier et des shapefiles.",
    "cannotDownloadOptionLabel": "Désactiver le téléchargement",
    "syncEnableTableHeaderTitle": {
      "layerNameLabel": "Nom de la couche",
      "csvFileFormatLabel": "CSV",
      "fileGDBFormatLabel": "Géodatabase fichier",
      "ShapefileFormatLabel": "Fichier de formes",
      "allowDownloadLabel": "Autoriser le téléchargement"
    },
    "setButtonLabel": "Définir",
    "GPTaskLabel": "Spécifier l'URL du service de géotraitement",
    "printGPServiceLabel": "URL du service d’impression",
    "setGPTaskTitle": "Spécifier l'URL du service de géotraitement requise",
    "logoLabel": "Logo",
    "logoChooserHint": "Astuce : cliquez sur l’icône d’image pour modifier le logo qui apparaît dans l’angle supérieur gauche du rapport",
    "footnoteLabel": "Note de bas de page",
    "columnTitleColorPickerLabel": "Couleur du titre des colonnes du rapport",
    "reportTitleLabel": "Titre du rapport",
    "displaySummaryLabel": "Afficher la synthèse",
    "hideZeroValueRowLabel": "Masquer les lignes de valeur 0 pour tous les champs d’analyse",
    "hideNullValueRowLabel": "Masquer les lignes de valeur No Data (nulles ou vides) pour tous les champs d’analyse",
    "errorMessages": {
      "invalidGPTaskURL": "Service de géotraitement non valide Sélectionnez un service de géotraitement contenant une tâche Extraire des données.",
      "noExtractDataTaskURL": "Sélectionnez un service de géotraitement contenant une tâche Extraire des données.",
      "duplicateCustomOption": "L’entrée de ${duplicateValueSizeName} est dupliquée.",
      "invalidLayoutWidth": "Largeur non valide saisie pour ${customLayoutOptionValue}.",
      "invalidLayoutHeight": "Hauteur non valide saisie pour ${customLayoutOptionValue}.",
      "invalidLayoutPageUnits": "Unité de page non valide sélectionnée pour ${customLayoutOptionValue}.",
      "failtofetchbuddyTaskDimension": "Erreur de récupération des informations de dimension de la tâche associée. Réessayez.",
      "failtofetchbuddyTaskName": "Erreur de récupération du nom de la tâche associée. Réessayez.",
      "failtofetchChoiceList": "Erreur de récupération de la liste de choix du service d’impression. Réessayez.",
      "invalidWidth": "Largeur non valide.",
      "invalidHeight": "Hauteur non valide."
    },
    "addCustomLayoutTitle": "Ajouter une mise en page personnalisée",
    "customLayoutOptionHint": "Astuce : ajoutez une mise en page de votre service d’impression à la liste des options d’impression.",
    "reportDefaultOptionLabel": "Mise en page par défaut",
    "pageSizeUnits": {
      "millimeters": "Millimètres",
      "points": "Points"
    },
    "noDataTextRepresentation": "Aucune valeur de données",
    "naTextRepresentation": "Valeur non applicable",
    "noDataDefaultText": "Aucune donnée",
    "notApplicableDefaultText": "N/D"
  },
  "generalTab": {
    "generalTabLabel": "Général",
    "tabLabelsLegend": "Etiquettes de volets",
    "tabLabelsHint": "Astuce : spécifiez des étiquettes",
    "AOITabLabel": "Volet Zone d’intérêt",
    "ReportTabLabel": "Volet Rapport",
    "bufferSettingsLegend": "Paramètres de la zone tampon",
    "defaultBufferDistanceLabel": "Distance de la zone tampon par défaut",
    "defaultBufferUnitsLabel": "Unités de la zone tampon",
    "generalBufferSymbologyHint": "Astuce : symbologie à utiliser pour désigner la zone tampon qui entoure la zone d’intérêt définie",
    "aoiGraphicsSymbologyLegend": "Symbologie de la zone d’intérêt",
    "aoiGraphicsSymbologyHint": "Astuce : symbologie utilisée pour désigner les zones d’intérêt (point, ligne et polygone)",
    "pointSymbologyLabel": "Point",
    "previewLabel": "Aperçu",
    "lineSymbologyLabel": "Ligne",
    "polygonSymbologyLabel": "Polygone",
    "aoiBufferSymbologyLabel": "Symbologie de la zone tampon",
    "pointSymbolChooserPopupTitle": "Symbole d’adresse ou d’emplacement du point",
    "polygonSymbolChooserPopupTitle": "Symbole de polygone",
    "lineSymbolChooserPopupTitle": "Symbole linéaire",
    "aoiSymbolChooserPopupTitle": "Symbole de la zone tampon",
    "aoiTabText": "AOI",
    "reportTabText": "Rapport",
    "invalidSymbolValue": "Valeur de symbole non valide."
  },
  "searchSourceSetting": {
    "searchSourceSettingTabTitle": "Paramètres de la source de recherche",
    "searchSourceSettingTitle": "Paramètres de la source de recherche",
    "searchSourceSettingTitleHintText": "Ajoutez et configurez des services de géocodage ou des couches d’entités en tant que sources de recherche. Ces sources déterminent les éléments pouvant faire l’objet d’une recherche dans la zone de recherche",
    "addSearchSourceLabel": "Ajouter une source de recherche",
    "featureLayerLabel": "Couche d'entités",
    "geocoderLabel": "Géocodeur",
    "generalSettingLabel": "Paramètre général",
    "allPlaceholderLabel": "Texte d'espace réservé pour tout parcourir :",
    "allPlaceholderHintText": "Conseil : saisissez le texte à afficher en tant qu'espace réservé pendant la recherche dans toutes les couches et le géocodeur.",
    "generalSettingCheckboxLabel": "Afficher la fenêtre contextuelle de l'entité ou de l'emplacement trouvé",
    "countryCode": "Codes de pays ou de régions",
    "countryCodeEg": "par ex. ",
    "countryCodeHint": "Si cette valeur n'est pas renseignée, la recherche s'effectue dans tous les pays et toutes les régions",
    "questionMark": "?",
    "searchInCurrentMapExtent": "Rechercher uniquement dans l'étendue de la carte actuelle",
    "locatorUrl": "URL du géocodeur",
    "locatorName": "Nom du géocodeur",
    "locatorExample": "Exemple",
    "locatorWarning": "Cette version du service de géocodage n'est pas prise en charge. Le widget prend en charge le service de géocodage versions 10.0 et ultérieures.",
    "locatorTips": "Les suggestions ne sont pas disponibles, car le service de géocodage ne prend pas en charge la fonction de suggestion.",
    "layerSource": "Source de la couche",
    "setLayerSource": "Définir une source de couche",
    "setGeocoderURL": "Définir l'URL du géocodeur",
    "searchLayerTips": "Les suggestions ne sont pas disponibles, car le service d'entités ne prend pas en charge la fonction de pagination.",
    "placeholder": "Texte de l'espace réservé",
    "searchFields": "Champs de recherche",
    "displayField": "Champ d'affichage",
    "exactMatch": "Correspondance parfaite",
    "maxSuggestions": "Nombre maximal de suggestions",
    "maxResults": "Nombre maximum de résultats",
    "enableLocalSearch": "Activer la recherche locale",
    "minScale": "Echelle. min.",
    "minScaleHint": "Lorsque l'échelle de la carte est supérieure à cette échelle, la recherche locale est appliquée",
    "radius": "Rayon",
    "radiusHint": "Indique le rayon d'une surface autour du centre de la carte qui permet d'optimiser le classement des candidats de géocodage, afin que les plus proches de l'emplacement soient renvoyés en premier",
    "setSearchFields": "Définir les champs de recherche",
    "set": "Définir",
    "invalidUrlTip": "L’URL ${URL} est incorrecte ou inaccessible.",
    "invalidSearchSources": "Paramètres de source de recherche non valides"
  },
  "errorMsg": {
    "textboxFieldsEmptyErrorMsg": "Renseignez les champs obligatoires",
    "bufferDistanceFieldsErrorMsg": "Entrez des valeurs valides",
    "invalidSearchToleranceErrorMsg": "Entrez une valeur valide pour la tolérance de recherche",
    "atLeastOneCheckboxCheckedErrorMsg": "Configuration non valide : au moins un outil Zone d’intérêt est requis.",
    "noLayerAvailableErrorMsg": "Aucune couche disponible",
    "layerNotSupportedErrorMsg": "Pas de prise en charge ",
    "noFieldSelected": "Utilisez l'action de mise à jour pour sélectionner les champs pour l'analyse.",
    "duplicateFieldsLabels": "Etiquette en double \"${labelText}\" ajoutée pour : \"${itemNames}\"",
    "noLayerSelected": "Sélectionnez au moins une couche pour l’analyse.",
    "errorInSelectingLayer": "Impossible de sélectionner la couche. Réessayez ultérieurement.",
    "errorInMaxFeatureCount": "Entrez un nombre d’entités maximal valide pour l’analyse."
  }
});