import React, { useState } from 'react';
import jsPDF from 'jspdf';

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
      format: ["1415", "1200"],
      // [1415, 1200],
    });
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(58);
    doc.addImage('https://media-hosting.imagekit.io//5c73c74592ea4c46/finallogo.png?Expires=1833693186&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=tUywRuFafopQU7B-Lf-2UERQOvrx4sHtm3HlRjHJ3yPR4YU1GewG13IXEqTZu34VhqTpM0y4n0paqKH3PDXPEG43jNKYpkb2SgTkPtoPDT5o~r2KNDPS3LY6iSFCRa4ziDtLKg1tE-xjfFlq4cK~uKH~H3HBELJhwkw1N5Ho5xKxh4N7md93souPcj5msTk8qUzei3nFkCV5NbBpWgh5rjwv1Ph5cwYBEyXZalyZ5PHqQciAdMYWg6Qda~s6M~fQHLfPG0XSqXW~mss~ThO5KQRs8bQpgCdT8KVYKe32EtV-UZPYOIBLxWz8GiYPqEhBJm9-lKOO7zC0sb-Ic7mtBg__', 'PNG', 0, 0, 1415, 2000);
    doc.text('CERTIFICATE OF COMPLETION', 50, 100);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(36);
    
    doc.addImage('https://media-hosting.imagekit.io//5c73c74592ea4c46/finallogo.png?Expires=1833693186&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=tUywRuFafopQU7B-Lf-2UERQOvrx4sHtm3HlRjHJ3yPR4YU1GewG13IXEqTZu34VhqTpM0y4n0paqKH3PDXPEG43jNKYpkb2SgTkPtoPDT5o~r2KNDPS3LY6iSFCRa4ziDtLKg1tE-xjfFlq4cK~uKH~H3HBELJhwkw1N5Ho5xKxh4N7md93souPcj5msTk8qUzei3nFkCV5NbBpWgh5rjwv1Ph5cwYBEyXZalyZ5PHqQciAdMYWg6Qda~s6M~fQHLfPG0XSqXW~mss~ThO5KQRs8bQpgCdT8KVYKe32EtV-UZPYOIBLxWz8GiYPqEhBJm9-lKOO7zC0sb-Ic7mtBg__', 'PNG', 800, 20, 150, 150);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(48);
    doc.text(`THIS CERTIFICATE AWARDED TO ${name} `, 100, 400);
    doc.setFontSize(33);
    doc.text(`HAS COMPLETED THE PYTHON FULL COURSE ON ROHI-LEARNING-HUB.`, 90, 490);
    doc.setFontSize(29);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 50, 600);
    
    doc.setFont('helvetica', 'bold');
    doc.text('ROHI-LEARNING-HUB', 50, 650);
    doc.text('Rangampet, Tirupathi, AndraPradesh', 50, 700);
     
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
    <div style={{
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
          Enter your name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} style={{
            padding: '10px',
            marginBottom: '20px',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }} />
        </label>
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
  );
}

export default CertificateGenerator;
