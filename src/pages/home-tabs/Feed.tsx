import { 
    IonButtons,
      IonCard,
      IonCardContent,
      IonCardHeader,
      IonCardSubtitle,
      IonCardTitle,
      IonContent, 
      IonHeader, 
      IonMenuButton, 
      IonPage, 
      IonTitle, 
      IonToolbar 
  } from '@ionic/react';
import FeedContainer from '../../components/FeedContainer';
  
  const Feed: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot='start'>
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Feed</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>

        <IonCard className="ion-margin-bottom">
      <img alt="ORV" src="https://scontent.fcgy2-1.fna.fbcdn.net/v/t39.30808-6/484599726_1207791254252131_3575104405568765530_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeH9zq7TJgvjm13ND8GNBXd3CWfQex8K3DwJZ9B7HwrcPJMY_D-fQf-FL87Xm4gr2jhi3wRL7mJCEPF_RTpPxciY&_nc_ohc=H53YriJ_r7IQ7kNvgERT3_G&_nc_oc=AdnJfzNHKPU8mFtgrpU5QF0GwAXb0lb_i4oPOwl8sxHyBDgUIx6XzC8LvWIbPWWJ8mE&_nc_zt=23&_nc_ht=scontent.fcgy2-1.fna&_nc_gid=flocW4hwe0tLNErbxn2jog&oh=00_AYFUW73cpVRFiMzucj70AuZPQGvgFI-CC61vQEJhTyYCgw&oe=67F06A9A" />
      <IonCardHeader>
        <IonCardTitle>The Prophet: Omniscient Reader</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>First teaser for "Omniscient Reader's Viewpoint" live action movie📣. Releasing in Summer 2025</IonCardContent>
    </IonCard>

    <IonCard>
      <img alt="SL" src="https://imageio.forbes.com/specials-images/imageserve/67bc8ceddfce63fdaf8b75f8/solo-leveling/960x0.jpg?format=jpg&width=1440" />
      <IonCardHeader>
        <IonCardTitle>Solo Leveling</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>The worldwide dungeon-crawling phenomenon is getting an anime adaptation!</IonCardContent>
    </IonCard>

    <IonCard>
      <img alt="SL" src="https://scontent.fcgy2-1.fna.fbcdn.net/v/t39.30808-6/472710070_1004323248381339_8002596174401427613_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeF-m3Cupcwrt-YDqOY1q7I-PKfNCMFmCAQ8p80IwWYIBDAofJJup-9ScLFxawNj8-oNq0AQyVElRfyxgQYxHP8v&_nc_ohc=uukzdlySN74Q7kNvgFpmOUL&_nc_oc=AdmlYIHMcw0mMuGEsWEP0hK_kDqjMn7IsMI9nICNnRj95PveiyF-q7bdy5MhnW2gua8&_nc_zt=23&_nc_ht=scontent.fcgy2-1.fna&_nc_gid=eGnctG-vALwlYbMusvnkOw&oh=00_AYGE8GZjB4_EJ0t5uQKkfwL9Bk3V5BzkQt1yof6w_uKVfg&oe=67F06EFE" />
      <IonCardHeader>
        <IonCardTitle>Solo Leveling</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>Solo Leveling Season 2 to fully adapt the "Jeju Island Raid" arc‼️‼️‼️
                  The upcoming anime season will cover the following story arcs:
                  ➡️ Red Gate
                  ➡️ Demon Castle Part 1 & Retesting
                  ➡️ Hunters Guild & Demon Castle Part 2
                  ➡️ Jeju Island Raid
      </IonCardContent>
    </IonCard>
        
      <FeedContainer />
        </IonContent>
      </IonPage>
    );
  };
  
  export default Feed;