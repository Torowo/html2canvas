/* @flow */
'use strict';

export const contains = (bit: number, value: number): boolean => (bit & value) !== 0;

export const copyCSSStyles = (style: CSSStyleDeclaration, target: HTMLElement): void => {
    // Edge does not provide value for cssText
    for (let i = style.length - 1; i >= 0; i--) {
        const property = style.item(i);
        // Safari shows pseudoelements if content is set
        if (property !== 'content') {
            target.style.setProperty(property, style.getPropertyValue(property));
        }
    }
};

export const SMALL_IMAGE =
    'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
