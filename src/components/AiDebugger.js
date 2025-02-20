import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button, Card, Spinner, Alert } from 'react-bootstrap';

const CodeDebugger = () => {
  const [code, setCode] = useState('');
  const [debugResult, setDebugResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const simulateAIDebug = (code) => {
    // This is a mock function to simulate AI debugging
    // In a real application, this would make an API call to your AI service
    return new Promise((resolve) => {
      setTimeout(() => {
        const analysis = {
          issues: [
            "Potential memory leak in useEffect cleanup",
            "Unnecessary re-renders due to missing dependency array",
            "Inconsistent error handling"
          ],
          suggestions: [
            "Add cleanup function in useEffect",
            "Add proper dependency array to useEffect hook",
            "Implement try-catch blocks for error handling"
          ],
          improvedCode: "// Improved version of your code\n" + code + "\n// With better error handling and optimization"
        };
        resolve(analysis);
      }, 2000);
    });
  };

  const handleDebug = async () => {
    if (!code.trim()) {
      setError('Please enter some code to debug');
      return;
    }

    setIsLoading(true);
    setError('');
    setDebugResult('');

    try {
      const result = await simulateAIDebug(code);
      setDebugResult(result);
    } catch (err) {
      setError('Failed to analyze code. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container className="py-5">
      <Row className="mb-4">
        <Col>
          <h1 className="text-center mb-4">AI Code Debugger</h1>
          <Card className="shadow-sm">
            <Card.Body>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Paste your code here:</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={10}
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="// Paste your code here..."
                    style={{ fontFamily: 'monospace' }}
                  />
                </Form.Group>
                <div className="d-grid">
                  <Button 
                    variant="primary" 
                    onClick={handleDebug}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Spinner
                          as="span"
                          animation="border"
                          size="sm"
                          role="status"
                          aria-hidden="true"
                          className="me-2"
                        />
                        Analyzing...
                      </>
                    ) : (
                      'Debug Code'
                    )}
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {error && (
        <Row className="mb-4">
          <Col>
            <Alert variant="danger">{error}</Alert>
          </Col>
        </Row>
      )}

      {debugResult && (
        <Row>
          <Col>
            <Card className="shadow-sm">
              <Card.Header className="bg-success text-white">
                <h5 className="mb-0">Analysis Results</h5>
              </Card.Header>
              <Card.Body>
                <h6>Issues Found:</h6>
                <ul className="mb-4">
                  {debugResult.issues.map((issue, index) => (
                    <li key={index}>{issue}</li>
                  ))}
                </ul>

                <h6>Suggestions:</h6>
                <ul className="mb-4">
                  {debugResult.suggestions.map((suggestion, index) => (
                    <li key={index}>{suggestion}</li>
                  ))}
                </ul>

                <h6>Improved Code:</h6>
                <Form.Control
                  as="textarea"
                  rows={10}
                  value={debugResult.improvedCode}
                  readOnly
                  style={{ fontFamily: 'monospace' }}
                  className="bg-light"
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default CodeDebugger;