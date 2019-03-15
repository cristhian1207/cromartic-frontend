import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SocialNetwork } from '../../bean/social-network';
import { URI_ART } from 'src/app/helpers/app.constant';

@Injectable({
  providedIn: 'root'
})
export class SocialNetworkService {

  constructor(
    private httpClient: HttpClient
  ) { }

  socialNetworks(username: string){
    return this.httpClient.get<SocialNetwork[]>(`${URI_ART}/users/${username}/social-network`);
  }
  
}
