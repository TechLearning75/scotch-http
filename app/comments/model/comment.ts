/* * * ./app/comments/model/comment.ts * * */
export class Comment {
  constructor(
    public id: Date,
    public author: string,
    public text: string
  ) { }

  // Add a new comment
     addComment (body: Object): Observable<Comment[]> {
         let bodyString = JSON.stringify(body); // Stringify payload
         let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
         let options       = new RequestOptions({ headers: headers }); // Create a request option

         return this.http.post(this.commentsUrl, body, options) // ...using post request
                          .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                          .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
     }

     // Update a comment
     updateComment (body: Object): Observable<Comment[]> {
         let bodyString = JSON.stringify(body); // Stringify payload
         let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
         let options       = new RequestOptions({ headers: headers }); // Create a request option

         return this.http.put(`${this.commentsUrl}/${body['id']}`, body, options) // ...using put request
                          .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                          .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
     }

     // Delete a comment
     removeComment (id:string): Observable<Comment[]> {
         return this.http.delete(`${this.commentsUrl}/${id}`) // ...using put request
                          .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                          .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
     }   

}
