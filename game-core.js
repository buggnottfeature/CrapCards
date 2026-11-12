(function(root){
'use strict';
class Game {
 constructor(data,saved){this.data=data;this.s=saved||{players:['Spieler 1','Spieler 2','Spieler 3','Spieler 4'].map(name=>({name,score:0})),active:0,round:0,phase:'idle',decks:data.map(()=>[]),cards:[],selected:[],swapped:false,swapChoice:null,deadline:0};}
 shuffle(a){a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
 draw(i){if(!this.s.decks[i].length)this.s.decks[i]=this.shuffle(this.data[i]);return this.s.decks[i].pop();}
 next(now=Date.now()){if(!['idle','between'].includes(this.s.phase))return false;if(this.s.round)this.s.active=(this.s.active+1)%4;Object.assign(this.s,{round:this.s.round+1,phase:'prep',cards:this.data.map((_,i)=>this.draw(i)),selected:Array(5).fill(false),swapped:false,swapChoice:null,deadline:now+20000});return true;}
 swap(i){if(this.s.phase!=='prep'||this.s.swapped||this.s.swapChoice!=='yes'||i<0||i>4)return false;this.s.cards[i]=this.draw(i);this.s.swapped=true;this.s.swapChoice='done';return true;}
 start(now=Date.now()){if(this.s.phase!=='prep')return false;this.s.phase='speech';this.s.deadline=now+60000;return true;}
 tick(now=Date.now()){if(this.s.phase==='speech'&&now>=this.s.deadline){this.s.phase='review';this.s.deadline=0;}return this.s.phase;}
 stop(now=Date.now()){if(this.s.phase==='speech'){this.s.phase='review';this.s.deadline=0;return true;}return false;}
 evaluate(){if(this.s.phase!=='review')return false;this.s.phase='score';return true;}
 toggle(i){if(this.s.phase!=='score')return;this.s.selected[i]=!this.s.selected[i];}
 points(){return this.s.selected.filter(Boolean).length+(this.s.swapped?0:2);}
 commit(){if(this.s.phase!=='score')return false;this.s.players[this.s.active].score+=this.points();this.s.phase=this.s.players[this.s.active].score>=60?'ended':'between';return true;}
 end(){this.s.phase='ended';this.s.deadline=0;}
 ranking(){return this.s.players.map((p,i)=>({...p,index:i})).sort((a,b)=>b.score-a.score||a.index-b.index);}
}
if(typeof module!=='undefined')module.exports=Game;else root.CrapGame=Game;
})(typeof window==='undefined'?globalThis:window);
