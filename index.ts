class Album {
    title: string;
    songs: string[];
    constructor(title: string, songs: string[]) {
        this.title = title;
        this.songs = songs;
    }
}
class Banda {
    members: string[];
    albums: Album[];
    constructor(members: string[], albums: Album[]) {
        this.members = members;
        this.albums = albums;
    }
}
function main() {
    const unAlbum = { 
    title:"album de marce",
    songs: ["una cancion"],
};
const unaBanda = new Banda(["marce"], [unAlbum, unAlbum, unAlbum]);
console.log(unaBanda.albums);
console.log("vino otra pesona y le metio este cambio");
}
main();
