import React, { useState } from 'react';
import {
  IonButton,
  IonContent,
  IonInput,
  IonInputPasswordToggle,
  IonPage,
  IonModal,
  IonText,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonAlert,
  IonTitle
} from '@ionic/react';
import { supabase } from '../utils/supabaseClient';
import bcrypt from 'bcryptjs';

// Reusable Alert Component
const AlertBox: React.FC<{ message: string; isOpen: boolean; onClose: () => void }> = ({ message, isOpen, onClose }) => (
  <IonAlert
    isOpen={isOpen}
    onDidDismiss={onClose}
    header="Notification"
    message={message}
    buttons={['OK']}
  />
);

const Register: React.FC = () => {
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showVerificationModal, setShowVerificationModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleOpenVerificationModal = () => {
    if (password !== confirmPassword) {
      setAlertMessage('Passwords do not match.');
      setShowAlert(true);
      return;
    }
    setShowVerificationModal(true);
  };

  const doRegister = async () => {
    setShowVerificationModal(false);
    try {
      const { data, error } = await supabase.auth.signUp({ email, password });
      if (error) throw new Error('Account creation failed: ' + error.message);
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      const { error: insertError } = await supabase.from('users').insert([
        {
          username,
          user_email: email,
          user_firstname: firstName,
          user_lastname: lastName,
          user_password: hashedPassword
        }
      ]);
      if (insertError) throw new Error('Failed to save user data: ' + insertError.message);
      setShowSuccessModal(true);
    } catch (err) {
      setAlertMessage(err instanceof Error ? err.message : 'An unknown error occurred.');
      setShowAlert(true);
    }
  };

  return (
    <IonPage>
      <IonContent className="ion-padding" style={{ backgroundColor: '#ffeef3' }}>
        <div style={{
          maxWidth: '400px',
          margin: '0 auto',
          marginTop: '10%',
          padding: '24px',
          borderRadius: '20px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          background: 'rgba(248, 177, 198, 0.8)',
          color: '#333'
        }}>
          <div className="ion-text-center">
            <h2 style={{ fontWeight: 'bold' }}>Create Your Account</h2>
          </div>

          <IonInput
            className="ion-margin-top"
            label="Username"
            labelPlacement="stacked"
            fill="outline"
            type="text"
            placeholder="Enter a unique username"
            value={username}
            onIonChange={e => setUsername(e.detail.value!)}
          />
          <IonInput
            className="ion-margin-top"
            label="First Name"
            labelPlacement="stacked"
            fill="outline"
            type="text"
            placeholder="Enter your first name"
            value={firstName}
            onIonChange={e => setFirstName(e.detail.value!)}
          />
          <IonInput
            className="ion-margin-top"
            label="Last Name"
            labelPlacement="stacked"
            fill="outline"
            type="text"
            placeholder="Enter your last name"
            value={lastName}
            onIonChange={e => setLastName(e.detail.value!)}
          />
          <IonInput
            className="ion-margin-top"
            label="Email"
            labelPlacement="stacked"
            fill="outline"
            type="email"
            placeholder="youremail@gmail.com"
            value={email}
            onIonChange={e => setEmail(e.detail.value!)}
          />
          <IonInput
            className="ion-margin-top"
            label="Password"
            labelPlacement="stacked"
            fill="outline"
            type="password"
            placeholder="Enter password"
            value={password}
            onIonChange={e => setPassword(e.detail.value!)}
          >
            <IonInputPasswordToggle slot="end" />
          </IonInput>
          <IonInput
            className="ion-margin-top"
            label="Confirm Password"
            labelPlacement="stacked"
            fill="outline"
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onIonChange={e => setConfirmPassword(e.detail.value!)}
          >
            <IonInputPasswordToggle slot="end" />
          </IonInput>

          <IonButton
            onClick={handleOpenVerificationModal}
            expand="block"
            shape="round"
            style={{ marginTop: '15px', backgroundColor: '#ffb3c1' }}
          >
            Register
          </IonButton>
          <IonButton
            routerLink="/it35-lab"
            expand="block"
            fill="clear"
            shape="round"
            className="ion-margin-top"
          >
            Already have an account? Sign in
          </IonButton>
        </div>

        {/* Verification Modal */}
        <IonModal isOpen={showVerificationModal} onDidDismiss={() => setShowVerificationModal(false)}>
          <IonContent className="ion-padding">
            <IonCard style={{ marginTop: '20%' }}>
              <IonCardHeader>
                <IonCardTitle>User Registration Details</IonCardTitle>
                <hr />
                <IonCardSubtitle>Username</IonCardSubtitle>
                <IonCardTitle>{username}</IonCardTitle>
                <IonCardSubtitle>Email</IonCardSubtitle>
                <IonCardTitle>{email}</IonCardTitle>
                <IonCardSubtitle>Name</IonCardSubtitle>
                <IonCardTitle>{firstName} {lastName}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent className="ion-text-right">
                <IonButton fill="clear" onClick={() => setShowVerificationModal(false)}>Cancel</IonButton>
                <IonButton color="primary" onClick={doRegister}>Confirm</IonButton>
              </IonCardContent>
            </IonCard>
          </IonContent>
        </IonModal>

        {/* Success Modal */}
        <IonModal isOpen={showSuccessModal} onDidDismiss={() => setShowSuccessModal(false)}>
          <IonContent
            className="ion-padding"
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', textAlign: 'center' }}
          >
            <IonTitle>Registration Successful 🎉</IonTitle>
            <IonText>
              <p>Your account has been created successfully.</p>
              <p>Please check your email address.</p>
            </IonText>
            <IonButton routerLink="/it35-lab" routerDirection="back" color="primary">
              Go to Login
            </IonButton>
          </IonContent>
        </IonModal>

        {/* Reusable AlertBox Component */}
        <AlertBox message={alertMessage} isOpen={showAlert} onClose={() => setShowAlert(false)} />
      </IonContent>
    </IonPage>
  );
};

export default Register;
