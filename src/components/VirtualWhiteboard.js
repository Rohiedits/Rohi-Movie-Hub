import React, { useState, useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Form, Navbar, Nav, Modal } from 'react-bootstrap';

const VirtualWhiteboard = () => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [context, setContext] = useState(null);
  const [color, setColor] = useState('#000000');
  const [brushSize, setBrushSize] = useState(5);
  const [tool, setTool] = useState('pencil');
  const [showGuide, setShowGuide] = useState(false);
  const [elements, setElements] = useState([]);
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  // Canvas setup
  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    const ctx = canvas.getContext('2d');
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    setContext(ctx);

    // Handle window resize
    const handleResize = () => {
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      ctx.putImageData(imageData, 0, 0);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const startDrawing = (e) => {
    const { offsetX, offsetY } = getCoordinates(e);
    context.beginPath();
    context.moveTo(offsetX, offsetY);
    context.strokeStyle = color;
    context.lineWidth = brushSize;
    setIsDrawing(true);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const { offsetX, offsetY } = getCoordinates(e);

    if (tool === 'pencil') {
      context.lineTo(offsetX, offsetY);
      context.stroke();
    } else if (tool === 'eraser') {
      context.strokeStyle = '#FFFFFF';
      context.lineTo(offsetX, offsetY);
      context.stroke();
      context.strokeStyle = color;
    }
  };

  const stopDrawing = () => {
    if (isDrawing) {
      context.closePath();
      setIsDrawing(false);
      saveToHistory();
    }
  };

  const getCoordinates = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    
    if (e.touches) {
      return {
        offsetX: (e.touches[0].clientX - rect.left) * scaleX,
        offsetY: (e.touches[0].clientY - rect.top) * scaleY
      };
    }
    return {
      offsetX: (e.clientX - rect.left) * scaleX,
      offsetY: (e.clientY - rect.top) * scaleY
    };
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    context.clearRect(0, 0, canvas.width, canvas.height);
    saveToHistory();
  };

  const saveToHistory = () => {
    const canvas = canvasRef.current;
    const imageData = canvas.toDataURL();
    const newHistory = [...history.slice(0, historyIndex + 1), imageData];
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  };

  const undo = () => {
    if (historyIndex > 0) {
      const newIndex = historyIndex - 1;
      setHistoryIndex(newIndex);
      const img = new Image();
      img.src = history[newIndex];
      img.onload = () => {
        context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        context.drawImage(img, 0, 0);
      };
    }
  };

  const redo = () => {
    if (historyIndex < history.length - 1) {
      const newIndex = historyIndex + 1;
      setHistoryIndex(newIndex);
      const img = new Image();
      img.src = history[newIndex];
      img.onload = () => {
        context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        context.drawImage(img, 0, 0);
      };
    }
  };

  const downloadCanvas = () => {
    const canvas = canvasRef.current;
    const image = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = 'whiteboard.png';
    link.href = image;
    link.click();
  };

  const styles = {
    container: {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column'
    },
    canvas: {
      border: '1px solid #ccc',
      backgroundColor: '#fff',
      cursor: 'crosshair',
      flex: 1
    },
    toolbar: {
      padding: '10px',
      backgroundColor: '#f8f9fa',
      borderBottom: '1px solid #dee2e6'
    },
    colorPicker: {
      width: '50px',
      height: '38px',
      padding: '0',
      marginRight: '10px'
    },
    brushSize: {
      width: '80px',
      marginRight: '10px'
    }
  };

  return (
    <div style={styles.container}>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand>Virtual Whiteboard</Navbar.Brand>
          <Nav className="me-auto">
            <Button 
              variant="outline-light" 
              className="ms-2"
              onClick={() => setShowGuide(true)}
            >
              Help
            </Button>
          </Nav>
        </Container>
      </Navbar>

      <div style={styles.toolbar}>
        <Row className="align-items-center">
          <Col xs="auto">
            <Form.Control
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              style={styles.colorPicker}
              title="Choose color"
            />
          </Col>
          <Col xs="auto">
            <Form.Control
              type="number"
              value={brushSize}
              onChange={(e) => setBrushSize(parseInt(e.target.value))}
              min="1"
              max="50"
              style={styles.brushSize}
            />
          </Col>
          <Col xs="auto">
            <Button
              variant={tool === 'pencil' ? 'primary' : 'outline-primary'}
              onClick={() => setTool('pencil')}
            >
              Pencil
            </Button>
          </Col>
          <Col xs="auto">
            <Button
              variant={tool === 'eraser' ? 'primary' : 'outline-primary'}
              onClick={() => setTool('eraser')}
            >
              Eraser
            </Button>
          </Col>
          <Col xs="auto">
            <Button variant="outline-secondary" onClick={undo}>
              Undo
            </Button>
          </Col>
          <Col xs="auto">
            <Button variant="outline-secondary" onClick={redo}>
              Redo
            </Button>
          </Col>
          <Col xs="auto">
            <Button variant="danger" onClick={clearCanvas}>
              Clear
            </Button>
          </Col>
          <Col xs="auto">
            <Button variant="success" onClick={downloadCanvas}>
              Download
            </Button>
          </Col>
        </Row>
      </div>

      <canvas
        ref={canvasRef}
        style={styles.canvas}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseOut={stopDrawing}
        onTouchStart={startDrawing}
        onTouchMove={draw}
        onTouchEnd={stopDrawing}
      />

      <Modal show={showGuide} onHide={() => setShowGuide(false)}>
        <Modal.Header closeButton>
          <Modal.Title>How to Use the Virtual Whiteboard</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Tools:</h5>
          <ul>
            <li><strong>Color Picker:</strong> Choose your drawing color</li>
            <li><strong>Brush Size:</strong> Adjust the thickness of your brush</li>
            <li><strong>Pencil:</strong> Free-hand drawing tool</li>
            <li><strong>Eraser:</strong> Erase parts of your drawing</li>
            <li><strong>Undo/Redo:</strong> Navigate through your drawing history</li>
            <li><strong>Clear:</strong> Erase everything from the canvas</li>
            <li><strong>Download:</strong> Save your drawing as a PNG file</li>
          </ul>
          <h5>Tips:</h5>
          <ul>
            <li>Click and drag to draw</li>
            <li>Use touch gestures on mobile devices</li>
            <li>Adjust brush size for different effects</li>
            <li>Save your work frequently using the Download button</li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setShowGuide(false)}>
            Got it!
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default VirtualWhiteboard;