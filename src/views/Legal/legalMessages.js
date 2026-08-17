/**
 * `$tm()` vrací zprávy bez typu. Tyto pomocné funkce jim dají tvar, se kterým
 * umí pracovat editor i kontrola typů v šablonách právních stránek.
 */

/**
 * @typedef {Object} LegalSection
 * @property {string} title
 * @property {string[]} paragraphs
 * @property {string[]} [items]
 * @property {string} [note]
 */

/**
 * @param {unknown} messages
 * @returns {LegalSection[]}
 */
export function toSections(messages) {
  return /** @type {LegalSection[]} */ (messages)
}

/**
 * @param {unknown} messages
 * @returns {string[]}
 */
export function toStrings(messages) {
  return /** @type {string[]} */ (messages)
}

/**
 * @param {unknown} messages
 * @returns {string[][]}
 */
export function toRows(messages) {
  return /** @type {string[][]} */ (messages)
}
