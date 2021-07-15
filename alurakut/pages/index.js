import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu } from '../src/lib/AlurakutCommons'

function ProfileSidebar(props){
  console.log("githubuser props --->", props)
  return(
    <Box>
       <img  style={{ borderRadius: '8px'}} src={`https://github.com/${props.githubUser}.png`}/>
    </Box>
  )
}

export default function Home() {

  const githubUser = 'thaysrq';

  return (
    <MainGrid>
      <div className="profileArea" style={{ gridArea: 'profileArea'}}>
        <ProfileSidebar githubUser={githubUser}/>
      </div>
      <div className="welcomeArea" style={{ gridArea: 'welcomeArea'}}>
        <Box>Bem vindo</Box>
      </div>
      <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea'}}>
        <Box>Meus amigos</Box>
      </div> 
    </MainGrid> 
  )
}
