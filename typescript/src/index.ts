

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import { firstFooterBlock, firstHeaderBlock, firstPageFromTop, firstSubgroupOfPage, flattenedPageStructure, nextPage, pageOrGroupActiveInContext, previousPage } from "./doc_functionality/lookup"
import { htmlSafeString, htmlSafeUrl } from "./doc_functionality/sandbox"
import { buildSearchIndexJSON } from "./doc_functionality/search"
import { highlightSafeString } from "./doc_functionality/string_utils"
import { formattedTokenGroupHeader, fullTokenGroupName, gradientDescription, gradientTokenValue, measureTypeIntoReadableUnit, scaledShadowTokenValue, shadowDescription, shadowTokenValue, typographyDescription } from "./doc_functionality/tokens"
import { assetUrl, textBlockPlainText, pageUrl, rootUrl, slugifyHeading, emailPreviewUrl } from "./doc_functionality/urls"

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Blueprint functions

/* Local lookup */
Pulsar.registerFunction("firstSubgroupOfPage", firstSubgroupOfPage)
Pulsar.registerFunction("pageOrGroupActiveInContext", pageOrGroupActiveInContext)
Pulsar.registerFunction("flattenedPageStructure", flattenedPageStructure)
Pulsar.registerFunction("firstPageFromTop", firstPageFromTop)
Pulsar.registerFunction("previousPage", previousPage)
Pulsar.registerFunction("nextPage", nextPage)
Pulsar.registerFunction("firstHeaderBlock", firstHeaderBlock)
Pulsar.registerFunction("firstFooterBlock", firstFooterBlock)

/* String utilities */
Pulsar.registerFunction("highlightSafeString", highlightSafeString)

/* Front-end search support */
Pulsar.registerFunction("buildSearchIndexJSON", buildSearchIndexJSON)

/* URL manipulation and support */
Pulsar.registerFunction("pageUrl", pageUrl)
Pulsar.registerFunction("emailPreviewUrl", emailPreviewUrl)
Pulsar.registerFunction("rootUrl", rootUrl)
Pulsar.registerFunction("assetUrl", assetUrl)
Pulsar.registerFunction("slugifyHeading", slugifyHeading)
Pulsar.registerFunction("textBlockPlainText", textBlockPlainText)

/* Token manipulation and formatting */
Pulsar.registerFunction("formattedTokenGroupHeader", formattedTokenGroupHeader)
Pulsar.registerFunction("fullTokenGroupName", fullTokenGroupName)
Pulsar.registerFunction("gradientDescription", gradientDescription)
Pulsar.registerFunction("gradientTokenValue", gradientTokenValue)
Pulsar.registerFunction("shadowDescription", shadowDescription)
Pulsar.registerFunction("shadowTokenValue", shadowTokenValue)
Pulsar.registerFunction("scaledShadowTokenValue", scaledShadowTokenValue)
Pulsar.registerFunction("measureTypeIntoReadableUnit", measureTypeIntoReadableUnit)
Pulsar.registerFunction("typographyDescription", typographyDescription)

/* Sandbox */
Pulsar.registerFunction("htmlSafeString", htmlSafeString)
Pulsar.registerFunction("htmlSafeUrl", htmlSafeUrl)