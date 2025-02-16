
import React, { useState, useEffect } from 'react';
import { 
  Container, Row, Col, Button, Form, 
  ListGroup, Badge, Modal, 
  Navbar, InputGroup
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const NotesApp = () => {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem('notes');
    return savedNotes ? JSON.parse(savedNotes) : [];
  });
  
  const [currentNote, setCurrentNote] = useState({ id: '', title: '', content: '', tags: [] });
  const [searchQuery, setSearchQuery] = useState('');
  const [showTagModal, setShowTagModal] = useState(false);
  const [newTag, setNewTag] = useState('');
  const [sortBy, setSortBy] = useState('date');

  // Save notes to localStorage
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const createNewNote = () => {
    const newNote = {
      id: Date.now().toString(),
      title: 'Untitled Note',
      content: '',
      createdAt: new Date().toISOString(),
      tags: []
    };
    setNotes([newNote, ...notes]);
    setCurrentNote(newNote);
  };

  const updateNote = (id, updatedFields) => {
    const updatedNotes = notes.map(note =>
      note.id === id ? { ...note, ...updatedFields } : note
    );
    setNotes(updatedNotes);
    if (id === currentNote.id) {
      setCurrentNote({ ...currentNote, ...updatedFields });
    }
  };

  const deleteNote = (id) => {
    if (window.confirm('Are you sure you want to delete this note?')) {
      const filteredNotes = notes.filter(note => note.id !== id);
      setNotes(filteredNotes);
      if (currentNote.id === id) {
        setCurrentNote({ id: '', title: '', content: '', tags: [] });
      }
    }
  };

  const addTag = () => {
    if (newTag && !currentNote.tags.includes(newTag)) {
      const updatedTags = [...currentNote.tags, newTag];
      updateNote(currentNote.id, { tags: updatedTags });
      setNewTag('');
      setShowTagModal(false);
    }
  };

  const removeTag = (tagToRemove) => {
    const updatedTags = currentNote.tags.filter(tag => tag !== tagToRemove);
    updateNote(currentNote.id, { tags: updatedTags });
  };

  const sortNotes = (notes) => {
    return [...notes].sort((a, b) => {
      switch (sortBy) {
        case 'title':
          return a.title.localeCompare(b.title);
        case 'date':
          return new Date(b.createdAt) - new Date(a.createdAt);
        default:
          return 0;
      }
    });
  };

  const filteredNotes = sortNotes(notes.filter(note =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    note.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
    note.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  ));

  return (
    <Container fluid className="vh-100 p-0">
      <Navbar bg="dark" variant="dark" className="p-3">
        <Navbar.Brand>Notes App</Navbar.Brand>
        <Form.Select 
          className="ms-auto me-2" 
          style={{ width: 'auto' }}
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="date">Sort by Date</option>
          <option value="title">Sort by Title</option>
        </Form.Select>
      </Navbar>

      <Row className="h-100 m-0">
        {/* Sidebar */}
        <Col md={3} className="p-0 border-end bg-light">
          <div className="p-3">
            <Button 
              variant="primary" 
              className="w-100 mb-3"
              onClick={createNewNote}
            >
              New Note
            </Button>
            
            <Form.Control
              type="text"
              placeholder="Search notes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="mb-3"
            />
          </div>

          <ListGroup variant="flush">
            {filteredNotes.map(note => (
              <ListGroup.Item
                key={note.id}
                action
                active={currentNote.id === note.id}
                onClick={() => setCurrentNote(note)}
                className="border-bottom"
              >
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <h6 className="mb-1">{note.title}</h6>
                    <p className="mb-1 text-muted small">
                      {note.content.substring(0, 50)}...
                    </p>
                  </div>
                </div>
                <div className="mt-2">
                  {note.tags.map(tag => (
                    <Badge 
                      key={tag} 
                      bg="secondary" 
                      className="me-1"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>

        {/* Main Content */}
        <Col md={9} className="p-0">
          {currentNote.id ? (
            <div className="d-flex flex-column h-100">
              <div className="p-3 border-bottom">
                <Row className="align-items-center">
                  <Col>
                    <Form.Control
                      type="text"
                      value={currentNote.title}
                      onChange={(e) => updateNote(currentNote.id, { title: e.target.value })}
                      placeholder="Note title"
                      className="border-0 h4"
                    />
                  </Col>
                  <Col xs="auto">
                    <Button
                      variant="outline-secondary"
                      className="me-2"
                      onClick={() => setShowTagModal(true)}
                    >
                      Tags
                    </Button>
                    <Button
                      variant="outline-danger"
                      onClick={() => deleteNote(currentNote.id)}
                    >
                      Delete
                    </Button>
                  </Col>
                </Row>
              </div>
              
              <Form.Control
                as="textarea"
                value={currentNote.content}
                onChange={(e) => updateNote(currentNote.id, { content: e.target.value })}
                placeholder="Start writing your note..."
                className="flex-grow-1 border-0 p-3"
                style={{ resize: 'none' }}
              />
            </div>
          ) : (
            <div className="h-100 d-flex align-items-center justify-content-center bg-light">
              <div className="text-center text-muted">
                <h4>No Note Selected</h4>
                <p>Select a note from the sidebar or create a new one</p>
              </div>
            </div>
          )}
        </Col>
      </Row>

      {/* Tags Modal */}
      <Modal show={showTagModal} onHide={() => setShowTagModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Manage Tags</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-3">
            {currentNote.tags.map(tag => (
              <Badge 
                key={tag} 
                bg="secondary" 
                className="me-1 mb-1"
                style={{ cursor: 'pointer' }}
                onClick={() => removeTag(tag)}
              >
                {tag} ×
              </Badge>
            ))}
          </div>
          <InputGroup>
            <Form.Control
              type="text"
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              placeholder="Add new tag..."
              onKeyPress={(e) => e.key === 'Enter' && addTag()}
            />
            <Button variant="outline-secondary" onClick={addTag}>
              Add
            </Button>
          </InputGroup>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default NotesApp;