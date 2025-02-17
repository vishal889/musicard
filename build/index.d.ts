declare module 'musicard' {
    class musicCard {
        constructor();

        setName(name: string): this;
        setAuthor(author: string): this;
        setColor(color: string): this;
        setThumbnail(thumbnail: string): this;
        setProgress(progress: number): this;
        setStartTime(starttime: string): this;
        setEndTime(endtime: string): this;
        setMode(mode: string): this;

        build(): Promise<Buffer>;
    }

    export { musicCard };
}
