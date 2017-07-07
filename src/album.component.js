/**
 * Created by user1 on 2017-07-06.
 */
import AlbumService from "./album.service";
import albumListTmpl from "./templates/album-list.hbs";

class AlbumComponent{
    constructor(){
        this.albumService = new AlbumService();
        //앨범 리스트는 언제 받아올지 모르기때문에.. 비동기 방식으로 컨텐츠를 받아오는 비동기방식으로 소스를 구현
        this.albumService.getAlbumList()
            .then(albumList => this.render(albumList));
    }

    render (albumList){
        //console.log(albumList);
        const tmpl = albumListTmpl({albumList});
        document.getElementById('album-list').innerHTML = tmpl;
    }
}

export default AlbumComponent;