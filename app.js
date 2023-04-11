let RealMadrid = {
    team_name:"Real Madrid",
    city:"Madrid",
    country:"Spain",
    top_scorers:["Ronaldo", "Benzema", "Hazard"],
    fans_in_mil:798
}
let Barcelona = {
    team_name:"Barcelona",
    city:"Barcelona",
    country:"Spain",
    top_scorers:["Messi", "Suarez", "Puyol"],
    fans_in_mil:738
}
let ManchesterUnited = {
    team_name:"Manchester United",
    city:"Manchester",
    country:"England",
    top_scorers:["Cantona","Rooney","Ronaldo"],
    fans_in_mil:755
}
let ManchesterCity = {
    team_name:"Manchester City",
    city:"Manchester",
    country:"England",
    top_scorers:["Sterling","Aguero","Haaland"],
    fans_in_mil:537
}
let BrazilNationalTeam = {
    team_name:"Brazil National Team",
    city:"N/A",
    country:"Brazil",
    top_scorers:["Ronaldinho","Cafu","Bebeto"],
    fans_in_mil:950
}
let ArgentinaNationalTeam = {
    team_name:"Argentina National Team",
    city:"N/A",
    country:"Argentina",
    top_scorers:["Messi","Batistuda","Maradona"],
    fans_in_mil:888
}
let AtleticoMadrid = {
    team_name:"Athletico Madrid",
    city:"Madrid",
    country:"Spain",
    top_scorers:["Aragonés", "Griezmann","Torez"],
    fans_in_mil:400
}
//firebase.firestore().collection("teams").add(RealMadrid)
firebase.firestore().collection("teams").add(Barcelona)
firebase.firestore().collection("teams").add(ManchesterUnited)
firebase.firestore().collection("teams").add(ManchesterCity)
firebase.firestore().collection("teams").add(BrazilNationalTeam)
firebase.firestore().collection("teams").add(ArgentinaNationalTeam)
firebase.firestore().collection("teams").add(AtleticoMadrid)