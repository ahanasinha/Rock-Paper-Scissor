const game= ()=> {
    let p_score=0;
    let c_score=0;
    const play = ()=> {
        const options=document.querySelectorAll('.options button');
        const phand=document.querySelector('.player-hand');
        const chand=document.querySelector('.comp-hand');
        //computer options
        const coptions=["Rock","Paper","Scissors"];
        options.forEach(option=>{
            option.addEventListener('click',function(){
                // computer choice
                const cno=Math.floor(Math.random()*3);
                const cchoice=coptions[cno];
                //comparing
                compare_hands(this.textContent,cchoice);
                // update images
                phand.src=`${this.textContent}.png`;
                chand.src=`${cchoice}.png`;
            });
        });
    };
    const update_score =() =>{
        const pscore=document.querySelector('.player-score p');
        const cscore=document.querySelector('.computer-score p');
        pscore.textContent=p_score;
        cscore.textContent=c_score;
    }
    const compare_hands = (pchoice,cchoice)=>{
        const winner=document.querySelector(".winner");
        if(pchoice === cchoice){
            winner.textContent="It's a tie!";
            return;
        }
        if(pchoice === "Rock"){
            if(cchoice ==="Scissors"){
                winner.textContent="Player wins!";
                p_score++;
                update_score();
                return;
            }
            else{
                winner.textContent="Computer wins!";
                c_score++;
                update_score();
                return;
            }
        }
        if(pchoice === "Paper"){
            if(cchoice === "Rock"){
                winner.textContent="Player wins!";
                p_score++;
                update_score();
                return;
            }
            else{
                winner.textContent="Computer wins!";
                c_score++;
                update_score();
                return;
            }
        }
        if(pchoice === "Scissors"){
            if(cchoice === "Paper"){
                winner.textContent="Player wins!";
                p_score++;
                update_score();
                return;
            }
            else{
                winner.textContent="Computer wins!";
                c_score++;
                update_score();
                return;
            }
        }
    };
    const reset_score=()=>{
        const res=document.querySelector('.reset_score');
        const winner=document.querySelector(".winner");
        res.addEventListener('click',function(){
            p_score=0;
            c_score=0;
            update_score();
            winner.textContent="";
            return;
        });
    };
    play();
    reset_score();
};
game();