# Grid Element

Grid?
> "There's an element for that"

![Grid Element Bower version](https://img.shields.io/bower/v/grid-element.svg)
![Grid Element Bower license](https://img.shields.io/bower/l/grid-element.svg)

- [Grid Element source code](https://github.com/charbelrami/grid-element)
- [Docs source code](https://github.com/charbelrami/grid-element-docs)

**This documentation is a work in progress**

## Contents
- [Introduction](#introduction)
- [Overview](#overview)
- [Installation](#installation)
- [Usage](#usage)
- [Running locally](#running-locally)
- [Public API](#public-api)
  - [CSS Custom Properties](#css-custom-properties)
  - [grid-element](#grid-element)
  - [grid-col](#grid-col)
- [Infinite grid](#infinite-grid)
- [Nestable grids](#nestable-grids)
- [Custom media query](#custom-media-query)
- [Column relative stretching factor](#column-relative-stretching-factor)
- [Children alignment](#children-alignment)
- [Individual alignment](#individual-alignment)
- [Gutters](#gutters)
  - [All gutters](#all-gutters)
  - [Inner horizontal gutters](#inner-horizontal-gutters)
  - [Outer horizontal gutters](#outer-horizontal-gutters)
  - [Inner vertical gutters](#inner-vertical-gutters)
  - [Outer vertical gutters](#outer-vertical-gutters)
  - [Gutter size](#gutter-size)
  - [Specific gutter size](#specific-gutter-size)
- [Browser support](#browser-support)

## Introduction

Grid Element is:

- A custom element built with [Polymer](https://github.com/Polymer/polymer). Thus, it is:
  - declarative
  - meaningful
  - modular
  - componentized
  - encapsulated
  - reusable
- An [infinite grid](#infinite-grid) based on [Flexbox](https://drafts.csswg.org/css-flexbox/)
- Responsive with [customizable media query](#custom-media-query)

## Overview

```html
<grid-element ga>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
</grid-element>
```

<grid-element ga>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
</grid-element>

## Installation

```sh
$ bower install --save grid-element
```

## Usage

```html
<!doctype html>
<html>
<head>
  <script src="bower_components/webcomponentsjs/webcomponents-lite.min.js" async></script>
  <link rel="import" href="bower_components/grid-element/grid-element.html">
</head>
<body>
  <grid-element>
    <grid-col>
      ...
    </grid-col>
    <grid-col>
      ...
    </grid-col>
    <grid-col>
      ...
    </grid-col>
  </grid-element>
</body>
</html>
```

## Running locally

```sh
$ npm install --global polyserve
```

```sh
$ polyserve
```

## Public API

Grid Element can be customized both through its [declared
properties](https://www.polymer-project.org/1.0/docs/devguide/properties.html)
and through its [Custom CSS Properties](https://drafts.csswg.org/css-variables/) —
which are part of the element API — while remaining within the scope of the
element, without ever exposing the internal implementation.

On markup, declared properties are represented by attributes. An attribute may
be included with no value assigned to it. In this case, its corresponding Custom
CSS Property is used or, if not defined, default value is assumed instead.
Either can be overwritten by setting a value to the attribute.

### CSS Custom Properties

```css
/**
 * Gutter size
 * Default: 10px
 */
--grid-gutter

/**
 * Inner horizontal gutter size
 * Default: --grid-gutter
 */
--grid-gutter-hi

/**
 * Outer horizontal gutter size
 * Default: --grid-gutter
 */
--grid-gutter-ho

/**
 * Inner vertical gutter size
 * Default: --grid-gutter
 */
--grid-gutter-vi

/**
 * Outer vertical gutter size
 * Default: --grid-gutter
 */
--grid-gutter-vo
```

### grid-element

property | type | initial value | description
--- | --- | --- | ---
`mq` | String | `'(min-width: 48em)'` | Media query.
`ga` | String | `--grid-gutter` or `10px` | All gutters. Equivalent to `ghi gho gvi gvo`.
`gs` | String | `--grid-gutter` or `10px` | Gutter size. Defines a common size for multiple gutter attributes.
`ghi` | String | `--grid-gutter-hi` or `--grid-gutter` or `10px` | Inner horizontal gutter size.
`gho` | String | `--grid-gutter-ho` or `--grid-gutter` or `10px` | Outer horizontal gutter size.
`gvi` | String | `--grid-gutter-vi` or `--grid-gutter` or `10px` | Inner vertical gutter size.
`gvo` | String | `--grid-gutter-vo` or `--grid-gutter` or `10px` | Outer vertical gutter size.
`start` | Boolean | `false` | Aligns columns in the top of the grid.
`center` | Boolean | `false` | Aligns columns in the center of the grid.
`end` | Boolean | `false` | Aligns columns in the bottom of the grid.

### grid-col

property | type | initial value | description
--- | --- | --- | ---
`s` | Number | `1` | Column relative stretching factor.
`start` | Boolean | `false` | Aligns itself to the top of the grid.
`center` | Boolean | `false` | Aligns itself to the center of the grid.
`end` | Boolean | `false` | Aligns itself to the bottom of the grid.
`stretch` | Boolean | `true` | **Default**. Stretches itself to match the height of the grid.

## Infinite grid

```html
<grid-element ga>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
</grid-element>
```

<grid-element ga>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
</grid-element>

## Nestable grids

```html
<grid-element ga>
  <grid-col>
    <grid-element ga>
      <grid-col>
        ...
      </grid-col>
      <grid-col>
        ...
      </grid-col>
    </grid-element>
  </grid-col>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
</grid-element>
```

<grid-element ga>
  <grid-col>
    <grid-element ga>
      <grid-col>
        ...
      </grid-col>
      <grid-col>
        ...
      </grid-col>
    </grid-element>
  </grid-col>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
</grid-element>

## Custom media query

```html
<grid-element mq="(min-width: 35em)">
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
</grid-element>
```

<grid-element mq="(min-width: 35em)">
  <grid-col>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima sed, dolore
    a, minus esse officia fugiat? Officiis aspernatur nesciunt suscipit soluta
    ut nulla ipsa similique impedit fugiat, et, alias officia vitae explicabo
    quam illum magni voluptate architecto natus expedita. Aspernatur laboriosam
    sed quam autem accusantium perferendis eligendi nihil natus commodi.
  </grid-col>
  <grid-col>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate
    delectus perspiciatis optio, ipsa accusamus laborum illo maiores eveniet,
    vel recusandae enim sint, explicabo atque.
  </grid-col>
  <grid-col>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate
    delectus perspiciatis optio, ipsa accusamus laborum illo maiores eveniet,
    vel recusandae enim sint, explicabo atque.
  </grid-col>
  <grid-col>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate
    delectus perspiciatis optio, ipsa accusamus laborum illo maiores eveniet,
    vel recusandae enim sint, explicabo atque.
  </grid-col>
</grid-element>

## Column relative stretching factor

```html
<grid-element>
  <grid-col s="3">
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
</grid-element>
```

<grid-element>
  <grid-col s="3">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima sed, dolore
    a, minus esse officia fugiat? Officiis aspernatur nesciunt suscipit soluta
    ut nulla ipsa similique impedit fugiat, et, alias officia vitae explicabo
    quam illum magni voluptate architecto natus expedita. Aspernatur laboriosam
    sed quam autem accusantium perferendis eligendi nihil natus commodi.
  </grid-col>
  <grid-col>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate
    delectus perspiciatis optio, ipsa accusamus laborum illo maiores eveniet,
    vel recusandae enim sint, explicabo atque.
  </grid-col>
  <grid-col>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate
    delectus perspiciatis optio, ipsa accusamus laborum illo maiores eveniet,
    vel recusandae enim sint, explicabo atque.
  </grid-col>
  <grid-col>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate
    delectus perspiciatis optio, ipsa accusamus laborum illo maiores eveniet,
    vel recusandae enim sint, explicabo atque.
  </grid-col>
</grid-element>

## Children alignment

```html
<grid-element start>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
</grid-element>
```

<grid-element start>
  <grid-col>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima sed, dolore
    a, minus esse officia fugiat? Officiis aspernatur nesciunt suscipit soluta
    ut nulla ipsa similique impedit fugiat, et, alias officia vitae explicabo
    quam illum magni voluptate architecto natus expedita. Aspernatur laboriosam
    sed quam autem accusantium perferendis eligendi nihil natus commodi.
  </grid-col>
  <grid-col>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate
    delectus perspiciatis optio, ipsa accusamus laborum illo maiores eveniet,
    vel recusandae enim sint, explicabo atque.
  </grid-col>
  <grid-col>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate
    delectus perspiciatis optio, ipsa accusamus laborum illo maiores eveniet,
    vel recusandae enim sint, explicabo atque.
  </grid-col>
  <grid-col>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate
    delectus perspiciatis optio, ipsa accusamus laborum illo maiores eveniet,
    vel recusandae enim sint, explicabo atque.
  </grid-col>
</grid-element>


```html
<grid-element center>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
</grid-element>
```

<grid-element center>
  <grid-col>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima sed, dolore
    a, minus esse officia fugiat? Officiis aspernatur nesciunt suscipit soluta
    ut nulla ipsa similique impedit fugiat, et, alias officia vitae explicabo
    quam illum magni voluptate architecto natus expedita. Aspernatur laboriosam
    sed quam autem accusantium perferendis eligendi nihil natus commodi.
  </grid-col>
  <grid-col>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate
    delectus perspiciatis optio, ipsa accusamus laborum illo maiores eveniet,
    vel recusandae enim sint, explicabo atque.
  </grid-col>
  <grid-col>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate
    delectus perspiciatis optio, ipsa accusamus laborum illo maiores eveniet,
    vel recusandae enim sint, explicabo atque.
  </grid-col>
  <grid-col>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate
    delectus perspiciatis optio, ipsa accusamus laborum illo maiores eveniet,
    vel recusandae enim sint, explicabo atque.
  </grid-col>
</grid-element>


```html
<grid-element end>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
</grid-element>
```

<grid-element end>
  <grid-col>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima sed, dolore
    a, minus esse officia fugiat? Officiis aspernatur nesciunt suscipit soluta
    ut nulla ipsa similique impedit fugiat, et, alias officia vitae explicabo
    quam illum magni voluptate architecto natus expedita. Aspernatur laboriosam
    sed quam autem accusantium perferendis eligendi nihil natus commodi.
  </grid-col>
  <grid-col>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate
    delectus perspiciatis optio, ipsa accusamus laborum illo maiores eveniet,
    vel recusandae enim sint, explicabo atque.
  </grid-col>
  <grid-col>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate
    delectus perspiciatis optio, ipsa accusamus laborum illo maiores eveniet,
    vel recusandae enim sint, explicabo atque.
  </grid-col>
  <grid-col>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate
    delectus perspiciatis optio, ipsa accusamus laborum illo maiores eveniet,
    vel recusandae enim sint, explicabo atque.
  </grid-col>
</grid-element>

## Individual alignment

```html
<grid-element>
  <grid-col>
    ...
  </grid-col>
  <grid-col start>
    ...
  </grid-col>
  <grid-col center>
    ...
  </grid-col>
  <grid-col end>
    ...
  </grid-col>
  <grid-col stretch>
    ...
  </grid-col>
</grid-element>
```

<grid-element>
  <grid-col>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima sed, dolore
    a, minus esse officia fugiat? Officiis aspernatur nesciunt suscipit soluta
    ut nulla ipsa similique impedit fugiat, et, alias officia vitae explicabo
    quam illum magni voluptate architecto natus expedita. Aspernatur laboriosam
    sed quam autem accusantium perferendis eligendi nihil natus commodi.
  </grid-col>
  <grid-col start>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate
    delectus perspiciatis optio, ipsa accusamus laborum illo maiores eveniet,
    vel recusandae enim sint, explicabo atque.
  </grid-col>
  <grid-col center>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate
    delectus perspiciatis optio, ipsa accusamus laborum illo maiores eveniet,
    vel recusandae enim sint, explicabo atque.
  </grid-col>
  <grid-col end>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate
    delectus perspiciatis optio, ipsa accusamus laborum illo maiores eveniet,
    vel recusandae enim sint, explicabo atque.
  </grid-col>
  <grid-col stretch>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate
    delectus perspiciatis optio, ipsa accusamus laborum illo maiores eveniet,
    vel recusandae enim sint, explicabo atque.
  </grid-col>
</grid-element>

## Gutters

### All gutters

```html
<grid-element ga>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
</grid-element>
```

<grid-element ga>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
</grid-element>


```html
<grid-element ga="32px">
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
</grid-element>
```

<grid-element ga="32px">
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
</grid-element>

## Inner horizontal gutters

```html
<grid-element ghi>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
</grid-element>
```

<grid-element ghi>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
</grid-element>

## Outer horizontal gutters

```html
<grid-element gho>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
</grid-element>
```

<grid-element gho>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
</grid-element>

## Inner vertical gutters

```html
<grid-element gvi>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
</grid-element>
```

<grid-element gvi>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
</grid-element>

## Outer vertical gutters

```html
<grid-element gvo>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
</grid-element>
```

<grid-element gvo>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
</grid-element>

## Example

```html
<grid-element ghi gho>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
</grid-element>
```

<grid-element ghi gho>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
</grid-element>

## Gutter size

```html
<grid-element ghi gho gs="32px">
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
</grid-element>
```

<grid-element ghi gho gs="32px">
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
</grid-element>

## Specific gutter size

```html
<grid-element ghi="16px" gho="32px">
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
</grid-element>
```

<grid-element ghi="16px" gho="32px">
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
</grid-element>

## Example

```html
<grid-element ghi gho="50px" gvi gvo="5px" gs="25px">
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
</grid-element>
```

<grid-element ghi gho="50px" gvi gvo="5px" gs="25px">
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
  <grid-col>
    ...
  </grid-col>
</grid-element>

## Browser support

- Chrome¹
- Firefox¹
- IE 11 / Edge¹
- Safari 8+
- Chrome for Android¹
- Safari for iOS 8.1+

<small>¹ latest version (evergreen browser)</small>

---

<footer class="page-footer">
  <iron-icon class="copyright-icon" icon="icons:copyright"></iron-icon> 2016 [Charbel Rami](https://twitter.com/charbelrami). All rights reserved. Source code licensed under [the MIT License](https://raw.githubusercontent.com/charbelrami/grid-element/master/license.txt). Documentation licensed under a [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
</footer>
