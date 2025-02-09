import React, { useState } from 'react';
import jsPDF from 'jspdf';
import Hero from './Hero';

function CertificateGenerator() {
  const [name, setName] = useState('');
  const [certificate, setCertificate] = useState(null);

  const handleSubmit = (e) => {
    // e.preventDefault();
    // const doc = new jsPDF();
    // doc.setFont('helvetica', 'bold');
    // doc.setFontSize(24);
    // doc.text('CERTIFICATE OF COMPLETION', 50, 20);
    // doc.setFont('helvetica', 'normal');
    // doc.setFontSize(18);
    // doc.text(`This is to certify that ${name} has completed the Python Full Course on Rohi-Learning-Hub.`, 50, 40);
    // doc.text(`Date: ${new Date().toLocaleDateString()}`, 50, 60);
    // doc.setFontSize(14);
    // doc.text('Rohi-Learning-Hub', 50, 80);
    // doc.text('Tirupathi,517102', 50, 90);
    // doc.addImage('https://media-hosting.imagekit.io//5c73c74592ea4c46/finallogo.png?Expires=1833693186&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=tUywRuFafopQU7B-Lf-2UERQOvrx4sHtm3HlRjHJ3yPR4YU1GewG13IXEqTZu34VhqTpM0y4n0paqKH3PDXPEG43jNKYpkb2SgTkPtoPDT5o~r2KNDPS3LY6iSFCRa4ziDtLKg1tE-xjfFlq4cK~uKH~H3HBELJhwkw1N5Ho5xKxh4N7md93souPcj5msTk8qUzei3nFkCV5NbBpWgh5rjwv1Ph5cwYBEyXZalyZ5PHqQciAdMYWg6Qda~s6M~fQHLfPG0XSqXW~mss~ThO5KQRs8bQpgCdT8KVYKe32EtV-UZPYOIBLxWz8GiYPqEhBJm9-lKOO7zC0sb-Ic7mtBg__', 'PNG', 150, 10, 50, 50);
    // const certificateBlob = new Blob([doc.output('blob')], { type: 'application/pdf' });
    // const certificateUrl = URL.createObjectURL(certificateBlob);
    // setCertificate(certificateUrl);

    e.preventDefault();
    const doc = new jsPDF({
      unit: 'px',
      format: [1415, 1200],
      // [1415, 1200],
    });
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(58);
    // doc.addImage('https://media-hosting.imagekit.io//7fea2cd6bd3d48d5/certificate%20bg2.jpg?Expires=1833731911&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=djrXfKoR6tJ8Z0q8wXbsYKFcORdRkRKypJE6HFk2g2yEKxJdwJYKZQhTHpm4yGwLFd~HkxMd5vadRENRN~Xa6IKhSFLDtJW2nBQfKkQyfc7tOsiexCqsunR9PHDF2eBZTYSOUrBCiSU38~hIItP83We5WiNpmYnN3h9B6-Nr1OMLg6Q73JcljLBD~~~xy6CII~hZ75-ZroAnp6hYu6EGY7EVBX6duC~QoPfCeUT~u-7DjA9tHgj~~yT9sHiD5wo5owWS0Ec5nslNkzuyi32PG7XKi-QfrHza3Rk9qjYVvfS2AnUyTtm9PpY6hKiRcWm-jZbZGPPxdfeXj5ge4At6HQ__', 'PNG', 0, 0, 1415, 2000);
    doc.addImage('https://media-hosting.imagekit.io//77d4a86bd9cf4086/certificate%20bg.jpg?Expires=1833723758&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=F5nnNCphjBDv7UMTPqPFgdlAo4-qoCqUSQbKV12UeAVc1PXsIgMF84bUviG~kBWPotVadupMbHy62MII3UP6Q7tadNpBvMsPqyG4c~Igjk5ry9v0FSAq6QISjwnJUZ5IHuS5PViGOxrWJqX8Iqw5QzbvuNx4VqrRejM80A7eXYD29jNGDNXQoGqOTG4eQl9JFncX~ys5L4ALMay7qSJ0zwp8XdDvookkX-zMPe-nLIaeVo5dOp1eMMMJPj3p4tUfWucwwyKOAASBWeMExtzANMWchzn7vAMPJT2gM4wp-DxECg2OVYRk9elSE8MbaCbmYKkI8qQce4BnpO~bwmo-OA__', 'PNG', 0, 0, 1415, 2000);
    // doc.addImage('https://media-hosting.imagekit.io//a27e5b4317174ebd/certificate%20background.jpg?Expires=1833723456&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=iOVLOsGkZxsmCS6HBcb521KBz2fjU0rkfAJ-Iuw6HQsCebdiKvtj-IL~PnHBrhrN8NfXMCi-pyTB6PP0bflVANLLKs8mSN5juu~oTm77dGFNrqcIqlbRoeMe6UgksKIWFCkuDkL9dmnR0-CPqVloLnGJkxk61YG-yKYtaUoPsSf~6DzftCYdsPJMwMoToztSXTY5wo2Ab-1WOxcWDhhwhwcd-lpKT1TeM1pZ4arF3tx7Jp9Mkb4XQ1M5wmTNkacPSucUabs59xJ7dmLBMELaLkwZFTlJxmORLJTodvRPUL1CXyImE0acx6XJRGrbm~SCMz6~YhGYoQqoabFGQ4Dn8g__', 'PNG', 0, 0, 1415, 2000);
    doc.text('CERTIFICATE OF COMPLETION', 50, 100);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(36);
    
    doc.addImage('https://media-hosting.imagekit.io//5c73c74592ea4c46/finallogo.png?Expires=1833693186&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=tUywRuFafopQU7B-Lf-2UERQOvrx4sHtm3HlRjHJ3yPR4YU1GewG13IXEqTZu34VhqTpM0y4n0paqKH3PDXPEG43jNKYpkb2SgTkPtoPDT5o~r2KNDPS3LY6iSFCRa4ziDtLKg1tE-xjfFlq4cK~uKH~H3HBELJhwkw1N5Ho5xKxh4N7md93souPcj5msTk8qUzei3nFkCV5NbBpWgh5rjwv1Ph5cwYBEyXZalyZ5PHqQciAdMYWg6Qda~s6M~fQHLfPG0XSqXW~mss~ThO5KQRs8bQpgCdT8KVYKe32EtV-UZPYOIBLxWz8GiYPqEhBJm9-lKOO7zC0sb-Ic7mtBg__', 'PNG', 1000, 20, 150, 150);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(48);
    doc.text(`THIS CERTIFICATE AWARDED TO ${name} `, 100, 400);
    doc.setFontSize(33);
    doc.text(`HAS COMPLETED THE PYTHON FULL COURSE ON ROHI-LEARNING-HUB.`, 90, 490);
    doc.setFontSize(29);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 50, 800);
    
    doc.setFont('helvetica', 'bold');
    doc.text('ROHI-LEARNING-HUB', 50, 850);
    doc.text('Rangampet, Tirupathi, AndraPradesh', 50, 900);
     
    // 
    const certificateBlob = new Blob([doc.output('blob')], { type: 'application/pdf' });
    const certificateUrl = URL.createObjectURL(certificateBlob);
    setCertificate(certificateUrl);
  };

  const handleDownload = () => {
    if (certificate) {
      const a = document.createElement('a');
      a.href = certificate;
      a.download = 'certificate.pdf';
      a.click();
    }
  };

  return (
    
    <div>
       <Hero text="👨‍💻 Python Course Completed Successfully.." />
    <div style={{
      marginTop:'250px',
      paddingTop:'50px',
      maxWidth: '500px',
      margin: '40px auto',
      padding: '20px',
      backgroundColor: '#f9f9f9',
      border: '1px solid #ddd',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      
      
    }}>
      
      
      <h1 style={{
        textAlign: 'center',
        marginBottom: '20px',
      }}>Certificate Of Completion Python</h1>
      <form onSubmit={handleSubmit} style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <label style={{
          marginBottom: '10px',
        }}>
          ENTER YOUR NAME:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} style={{
            padding: '10px',
            marginBottom: '20px',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }} />
        </label>
        <label style={{
          marginBottom: '10px',color:'red'
        }} >[ Enter Your Name in Capitals ]</label>
        <button type="submit" style={{
          padding: '10px 20px',
          backgroundColor: '#4CAF50',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}>Generate Certificate</button>
      </form>
      {certificate && (
        <button onClick={handleDownload} style={{
          padding: '10px 20px',
          backgroundColor: '#4CAF50',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginTop: '20px',
        }}>Download Certificate</button>
      )}
    </div>
    </div>
  );
}

export default CertificateGenerator;
