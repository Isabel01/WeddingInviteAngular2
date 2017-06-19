import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from "angularfire2/database/database";
import { Observable, Subscription, Observer } from "rxjs";
import { Router } from "@angular/router";

@Injectable()
export class MusicService {

	subscriptions : Subscription[] = [];
	songs : Song[] = [];
	songsObservers : Observer<music>[] = [];


  constructor(public afAuth: AngularFireAuth,
    public db: AngularFireDatabase,
    private router: Router) { }


  private _getAllSongs(){
  	return new Promise((resolve, reject) => {
	    try{

	      let songsObservable = this.db.object(`/music`);

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

}

export interface Song {
  name : string,
  artist : string
}

export interface music {
  songs : Array<Song>
}

