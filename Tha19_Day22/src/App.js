import {useState, useEffect} from 'react';
import "./styles.css";

function Templates({templates, setMeme}){
  return(
    <div>
    {
        templates.map((template) => (
          <div className="template" key={template.id} onClick={() => {
            setMeme(template)
          }}>
            <div className="img" style={{ backgroundImage: `url(${template.url})` }}></div>
          </div>
        ))
    }
    </div>
  )
}

function Meme({meme, setMeme}) {
  const [form, setForm] = useState({
    template_id: meme.id,
    username:"Razziil",
    password:"razsam1112",
    boxes: []
  });

  const generatememe = () => {
    let url = `https://api.imgflip.com/caption_image?template_id=${form.template_id}&username=${form.username}&password=${form.password}`;
    form.boxes.map((box, index) => {
      url += `&boxes[${index}][text]=${box.text}`;
    });
    fetch(url)
    .then(res => res.json())
    .then(data => {
      data["success"] === true ? (setMeme({...meme, url: data.data.url})) : (setMeme({...meme}))
    });
  }

  return(
    <div className="meme">
      <img src={meme.url} alt="" ></img>
      <div>
        {
          [...Array(meme.box_count)].map((_, index) => (<input type="text" key={index} placeholder={`meme caption ${index + 1}`} onChange={(e) => {
            const newboxes = form.boxes;
            newboxes[index] = {text: e.target.value};
            setForm({...form, boxes: newboxes});
          }} ></input>))
        }
      </div>
      <div>
        <button onClick={generatememe}>Generate Meme</button>
        <button onClick={() => {setMeme(null);}}>Choose Template</button>
      </div>
    </div>
  )
}

function App() {
  const [templates, setTemplates] = useState([]);
  const [meme , setMeme] = useState(null);
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
    .then((res) => res.json())
    .then((data) => {
      setTemplates(data.data.memes);
    });
  }, []);

  return(
    <div>
      <h1>Meme Generator</h1>
      {
        meme === null ? 
        (<Templates templates={templates} setMeme={setMeme} />) : 
        (<Meme meme={meme} setMeme={setMeme} />)
      }
    </div>
    )
}

export default App;