import { 
    IonButtons,
      IonCard,
      IonCardContent,
      IonCardHeader,
      IonCardSubtitle,
      IonCardTitle,
      IonContent, 
      IonHeader, 
      IonItem, 
      IonLabel, 
      IonList, 
      IonMenuButton, 
      IonPage, 
      IonThumbnail, 
      IonTitle, 
      IonToolbar 
  } from '@ionic/react';
  
  const Favorites: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot='start'>
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Favorites</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
        <IonCard>
      <IonCardHeader>
        <IonCardTitle>The things that I love 💖</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <IonList>
          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Books" src="https://www.bhg.com/thmb/OzGgGaWh98eh5AKjCu0bES2Zb8o=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/102393235-3795885e0b7640d2ab27a1a55e181906.jpg" />
            </IonThumbnail>
            <IonLabel>Reading</IonLabel>
          </IonItem>

          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Movie" src="https://steemitimages.com/p/2r8F9rTBenJR3NJww7tXib1rakcnLkz8HVxZo9BVAk1RR4m6rawEJCoWMBFa5X3eKVKM8c58K2v1UEXGVu7aaTDip1eykAcdBNbDaF9ve6L7FFeYuzwGstYxmVXuoBnMU?format=match&mode=fit&width=640" />
            </IonThumbnail>
            <IonLabel>Movie Marathon</IonLabel>
          </IonItem>

          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Kitty" src="https://cdn.vox-cdn.com/thumbor/5_z0MRDBn1tOvWkp1MhXipxPmg8=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/11565433/825471074.jpg.jpg" />
            </IonThumbnail>
            <IonLabel>Hello Kitty</IonLabel>
          </IonItem>

          <IonItem lines="none">
            <IonThumbnail slot="start">
              <img alt="Frisbee" src="https://scontent.fcgy2-4.fna.fbcdn.net/v/t39.30808-6/475306403_122125121852594882_1702794426792714697_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEO6WJ21T-3nbWkMZyXLjty3bhjmiwdbDfduGOaLB1sNxBDVN14ZLs6xnpuXhYD6RJpD7MQ21xZl8BIvFrFvQQK&_nc_ohc=hen45I1q4EoQ7kNvgEfsg7a&_nc_oc=AdmzXmerS_6bBGPcdn2tUXdRj_913Bwf9EY5ba5R2UxUomW0-BckVWB9Eatj_CSES_k&_nc_zt=23&_nc_ht=scontent.fcgy2-4.fna&_nc_gid=77xXtKZGy6HxY3qbPVaUWA&oh=00_AYFEZmAEf5CF4K-D19AmNsyUeQsinyKWYWB-2LuIPSlS6A&oe=67F07B57" />
            </IonThumbnail>
            <IonLabel>Frisbee</IonLabel>
          </IonItem>

          <IonItem lines="none">
            <IonThumbnail slot="start">
              <img alt="Fam" src="https://scontent.fcgy2-1.fna.fbcdn.net/v/t39.30808-6/480943807_618928570926741_3540642241450815494_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeH7IEk5ONSUo4JUMsfolevchjrDsvkkyC2GOsOy-STILTHyVoF9bVj7pVDvCXcsu73eSPfp_um00pRDCOzLLTkE&_nc_ohc=C64ZFWvWlJEQ7kNvgH7EQut&_nc_oc=AdmJ2FFLMJlK6HTIOg6RarxIcykIa1avHgbk1awF1HsejIZ4Iqf3WnIARCVVadk2MHs&_nc_zt=23&_nc_ht=scontent.fcgy2-1.fna&_nc_gid=k2-sf9Q-iuih5kBqOOwLdA&oh=00_AYEoalhrEoss2o0N7y7t84vr2y2tpQFOmNhxOtZB6gDWMA&oe=67F0573A" />
            </IonThumbnail>
            <IonLabel>Family</IonLabel>
          </IonItem>
        </IonList>
      </IonCardContent>
    </IonCard>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Favorites;