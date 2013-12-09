## About this document

This is a short, free and open introduction to the concept of tiled maps. It covers the basics as well as a lot of technical detail on how tiling maps work, for example projections and how coordinates are handled. It assumes basic knowledge about maps an geography. A good start before reading this document is for example [mapschool](http://macwright.org/mapschool/).

## Introduction

A common way to display maps on computers, especially on the internet, is to use so called _tiled_ maps. A tiled map means
that what appears to the user as one large map image, is really put together from a number of smaller images, _tiles_, that are drawn next to each other, without seams, to create the illusion of a much larger image.

_Picture of a map split into tiles_

[Google Maps](https://maps.google.com/) is most certainly the prime example of a tiled map. It made maps on the internet popular in 2005, by stitching together 256 by 256 pixel images of the whole world at remarkable detail. Today, almost all maps on the internet aimed to the public use tiling.

## Why tiled maps?

Lets go through how one could go about creating a map to be published on the internet.

As a first attempt, we scan a paper map and publish the resulting bitmap image on the internet. This digital equivalent of a paper map has the same limitations as a paper map: the amount of detail is limited by the size of the image; adding more detail without cluttering the map forces us to either increase the size of the image, or reduce the reduce the scale of the map. This is fine if the purpose of the map is known before hand, the scale and size can be optimized for one purpose. For a general purpose map, this can't be easily done.

An alternative is to produce several maps at different scales, from large scale overview maps, down to highly detailed maps.

### Zoom levels

The concept described above, storing multiple images of the geographic area covered, but with different scales, is commonly called _zoom levels_, since the increasing scale can be envisioned as "zooming" into the map, making features larger and larger while also revealing more detail.

### Image size

A problem with this approach is that while increasing the scale, the image size quickly grows to sizes that become unwieldy to handle with current technology, if all zoom levels should cover the same geographic area.

As an example, Google Maps cover the whole world in one single 256×256 image at its outermost zoom level. At the 20th zoom level, the size has grown to 134 million by 134 million pixels, an image that even assuming some pretty good compression would be about 25 terrabytes in size. Needless to say, no consumer grade computer can handle such an image, not to mention the time and bandwidth required to download it from the internet.

### Tiling

Instead of making a single, huge image, a tiling map will divide the image into several smaller images, _tiles_, of a fixed size. When displaying the map, only the images covering the geographic area currently being displayed are required. This means that typically only 20-30 tiles are needed to display any geographic area, independent of zoom level. This technique makes it possible to display maps at even modest hardware.

### Tiles are not just images

Tiling is not necessarily just for images. The same technique can be used for other types of geographic data, where the data set is a coverage for a geographic area, and grows to unmanageable size. For example:

* [Vector tiles](https://github.com/mapbox/tm2)
* [UTFGrid](https://github.com/mapbox/utfgrid-spec)

## Alternatives to tiling

Tiles are not the only method to achieve global maps at multiple scales. Another common method is to let the viewing application (web browser, for example) request an image of the current geographic location, and then let a server draw the bitmap image. One such technology is called WMS (Web Map Service), and standardizes how such images can be obtained. This method also removes the concept of fixed zoom levels, and produces images at whatever scale is requested.

While more general than a tiled map, this method puts larger strain on the application that services the requests. Since the geographic areas and scales being requested can't be known in advance, each image have to be drawn from scratch, which can be a very complicated process for detailed maps or when advanced cartographic techniques are used. This makes WMS and similar technologies infeasible to use if the service is being used by a large number of users.

## Making tiled maps

### Projections



### Pixel coordinates

### Addressing tiles

## License

[Creative Commons Attribution 3.0 Unported](http://creativecommons.org/licenses/by/3.0/deed.en_US)