export class BasicAnime{
    constructor(
        public elm:HTMLElement,
        public prop:string,
        ){
    }

    public anime(duration:number,iterations:number,beforeValue:string|number,afterValue:string|number){
        return this.elm.animate(
            [
                {[this.prop]:beforeValue},{[this.prop]:afterValue}
            ],{
                fill:"forwards",
                duration:duration,
                iterations:iterations
            }
        )
    }
}