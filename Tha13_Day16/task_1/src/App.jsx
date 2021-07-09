import "./styles.css";

function White(){
	return(
		<div className="white">
		</div>
	);
}

function Black(){
	return(
		<div className="black">
		</div>
	);
}

function Seq1(){
	return(
		<div className="seq">
			<White/>
			<Black/>
			<White/>
			<Black/>
			<White/>
			<Black/>
			<White/>
			<Black/>
		</div>
	);
}

function Seq2(){
	return(
		<div className="seq">
			<Black/>
			<White/>
			<Black/>
			<White/>
			<Black/>
			<White/>
			<Black/>
			<White/>
		</div>
	);
}

function App() {
	return (
		<div className="card">
			<Seq1/>
			<Seq2/>
			<Seq1/>
			<Seq2/>
			<Seq1/>
			<Seq2/>
			<Seq1/>
			<Seq2/>
		</div>
	);
}

export default App;