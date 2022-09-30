WordList 
{
    id: "uuid"
}

Word
{
    "phon": "",
    "phon_sound": "",
    "phons_n_am": "",
    "phons_n_am_sound": "",
    
    
}

Meaning
{
    "type": "",
    "description": "",
    "examples": [],
    "extra_examples": []
}

curl --data "type=word&uri=https://www.oxfordlearnersdictionaries.com/definition/english/corporate?q=corporate" -X POST "http://localhost:3000/crawler"

  curl "http://localhost:3000/crawler/test"

 CREATE p = (w: Word {headword: "corporate",
  type: "adjective",
  phon: "/ˈkɔːpərət/",
  phons_n_am: "/ˈkɔːrpərət/",
phon_sound: "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/c/cor/corpo/corporate__gb_1.mp3",
  phons_n_am_sound: "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/c/cor/corpo/corporate__us_1_rr.mp3"})-[:HAS_MEAN]->(m: Meaning {description: "yep desc"})


  CREATE p = (w: Word {headword: "corporate",
  type: "adjective",
  phon: "/ˈkɔːpərət/",
  phons_n_am: "/ˈkɔːrpərət/",
phon_sound: "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/c/cor/corpo/corporate__gb_1.mp3",
  phons_n_am_sound: "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/c/cor/corpo/corporate__us_1_rr.mp3"}), (m1: Meaning {description: "yep desc"}),(m2: Meaning {description: "desc ne"})
  create (w)-[:HAS_MEAN]->(m1)
  create (w)-[:HAS_MEAN]->(m2)
  

MATCH (s:Invitee {email: 'sponsor@gmail.com'})
UNWIND $arrayOfObjects as invitee
MERGE (i:Invitee {email:invitee.email}) 
CREATE (s)-[r:INVITED {since: timestamp()}]->(i)