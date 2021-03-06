// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Support

/** Retrieve first subgroup below root group */
export function firstSubgroupOfPage(page: DocumentationPage) {
  let parent: DocumentationGroup | null = page.parent
  while (true) {
    if (!parent || parent.isRoot) {
      return undefined
    }

    if (parent.parent && parent.parent.isRoot) {
      return parent
    }
    parent = parent.parent
  }
}

/** Check whether targeted item is descendant of provided root */
export function pageOrGroupActiveInContext(pageOrGroup: DocumentationPage | DocumentationGroup, context: DocumentationPage | DocumentationGroup) {
  if (context.type === "Page") {
    // If we are checking against plain page, then we can only compare
    let contextPage = context as DocumentationPage
    return contextPage.id === pageOrGroup.id
  } else {
    // If we are checking against group, check everything upwards the tree. If group contains the page, return that information
    let contextGroup = context as DocumentationGroup
    if (contextGroup.childrenIds.indexOf(pageOrGroup.persistentId) !== -1) {
      return true
    } else if (pageOrGroup.parent) {
      return pageOrGroupActiveInContext(pageOrGroup.parent, contextGroup)
    } else {
      // Reached root and didn't find anything, abandon ship
      return false
    }
  }
}

/** Find first showable page from the top of the provided root */
export function firstPageFromTop(documentationRoot: DocumentationGroup): DocumentationPage | null {
  for (let child of documentationRoot.children) {
    if (child.type === "Page") {
      return child as DocumentationPage
    } else {
      let possiblePage = firstPageFromTop(child as DocumentationGroup)
      if (possiblePage) {
        return possiblePage
      }
    }
  }
  return null
}

/** Create flattened structure of pages */
export function flattenedPageStructure(root: DocumentationGroup): Array<DocumentationPage> {

  let pages: Array<DocumentationPage> = []
  for (let item of root.children) {
    if (item.type === "Page") {
      pages.push(item as DocumentationPage)
    } else if (item.type === "Group") {
      pages = pages.concat(flattenedPageStructure(item as DocumentationGroup))
    }
  }

  return pages
}

/** Find next page after provided page */
export function nextPage(page: DocumentationPage, documentationRoot: DocumentationGroup): DocumentationPage | null {

  let flattenedPages = flattenedPageStructure(documentationRoot)
  let pageIndex = flattenedPages.findIndex(p => p.id === page.id)
  if (pageIndex !== -1) {
    if (pageIndex < flattenedPages.length - 1) {
      return flattenedPages[pageIndex + 1]
    }
  }
  return null
}

/** Find previous page of provided page */
export function previousPage(page: DocumentationPage, documentationRoot: DocumentationGroup): DocumentationPage | null {

  let flattenedPages = flattenedPageStructure(documentationRoot)
  let pageIndex = flattenedPages.findIndex(p => p.id === page.id)
  if (pageIndex > 0) {
    return flattenedPages[pageIndex - 1]
  }
  return null
}

/** Find first header block */
export function firstHeaderBlock(page: DocumentationPage): DocumentationPageBlock | null {

  for (let block of page.blocks) {
    if (block.type === "Custom") {
      if ((block as any).key === "io.supernova.supermail.header") {
        return block
      }
    }
  }
  return null
}


/** Find first header block */
export function firstFooterBlock(page: DocumentationPage): DocumentationPageBlock | null {

  for (let block of page.blocks) {
    if (block.type === "Custom") {
      if ((block as any).key === "io.supernova.supermail.footer") {
        return block
      }
    }
  }
  return null
}