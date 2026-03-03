/**
 * ext-messaging - Library implementation
 * @packageDocumentation
 */

/**
 * Initialize the messaging library
 * Sets up event listeners and prepares the extension for message passing
 * 
 * @example
 * ```typescript
 * import { initialize } from '@theluckystrike/ext-messaging';
 * initialize();
 * ```
 */
export function initialize(): void {
  console.log('ext-messaging initialized');
}

/**
 * Example function demonstrating basic usage
 * 
 * @returns A sample string for demonstration purposes
 * @example
 * ```typescript
 * const result = example();
 * console.log(result); // "example"
 * ```
 */
export function example(): string {
  return 'example';
}
