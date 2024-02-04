import React from "react";
import imageSize from "image-size";
import Image from "next/image";

export default function ImageResize({ src, href }: { src: string, href: string }) {
    let { width, height } = imageSize("./public" + src);

    if (!width || !height) {
        console.error("Couldn't get image dimensions");

        return (<></>);
    }

    if (width > height) {
        height *= 200 / width;
        width = 200
    } else {
        width *= 200 / height;
        height = 200
    }

    return (
        <a href={href} target="_blank"><Image alt="" width={width} height={height} src={src}></Image></a>
    )
}