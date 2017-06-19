import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from "angularfire2/database/database";
import { Observable, Subscription, Observer } from "rxjs";
import { Router } from "@angular/router";

@Injectable()
export class MusicService {

	subscriptions : Subscription[] = [];
	songs : Song[] = [];
	songsObservers : Observer<Song[]>[] = [];


  constructor(public afAuth: AngularFireAuth,
    public db: AngularFireDatabase,
    private router: Router) {
    this._getAllSongs();

  }


  private _getAllSongs(){
  	return new Promise((resolve, reject) => {
	    try{

	      let songsObservable = this.db.list(`/music/songs`);

	      this.subscriptions.push(songsObservable.subscribe(songs => {
              this.songsObservers.forEach(observer => {
                  observer.next(songs);
              });
              this.songs = songs;
              resolve(this.songs);
	      }))
	  	} catch(error) {
	  		reject(error);
	  	}

   	});

  }

  getAllSongs() : Observable<Song[]> {
    return new Observable<Song[]>(observer => {
      this.songsObservers.push(observer);
      observer.next(this.songs);
    });
  }

  addSong(song : Song) {
    let songsObservable = this.db.list(`/music/songs`);
    songsObservable.push(song);
  }

}


export interface Song {
  name : string,
  artist : string
}



