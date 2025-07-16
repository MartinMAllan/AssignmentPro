import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import HomeIcon from '@mui/icons-material/Home'; // Added import
import MessageIcon from '@mui/icons-material/Message'; // Added import
import HelpIcon from '@mui/icons-material/Help'; // Added import
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const HelpCenter = ({ open, onClose }) => {
  const [tabValue, setTabValue] = useState(0);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { id: 1, sender: 'Admin', text: 'Hello! How can we assist you today?' },
  ]);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      setChatHistory([...chatHistory, { id: chatHistory.length + 1, sender: 'You', text: message }]);
      setMessage('');
    }
  };

  const predefinedMessages = [
    'How can I place an order?',
    'I need help with payment issues.',
    'Can you assist with an order problem?',
  ];

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Help Center</DialogTitle>
      <DialogContent>
        <Typography variant="h6" gutterBottom>Hey there! 👋 How can we help?</Typography>
        <Paper sx={{ p: 2, mb: 2, backgroundColor: '#E3F2FD' }}>
          <List>
            {chatHistory.map((msg) => (
              <ListItem key={msg.id}>
                <ListItemText
                  primary={`${msg.sender}: ${msg.text}`}
                  primaryTypographyProps={{ color: msg.sender === 'You' ? 'primary' : 'textSecondary' }}
                />
              </ListItem>
            ))}
          </List>
        </Paper>
        {predefinedMessages.map((msg, index) => (
          <Button
            key={index}
            variant="outlined"
            color="primary"
            sx={{ mr: 1, mb: 1 }}
            onClick={() => setMessage(msg)}
          >
            {msg}
          </Button>
        ))}
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Type your message..."
          value={message}
          onChange={handleMessageChange}
          sx={{ mt: 2 }}
          InputProps={{
            endAdornment: (
              <IconButton onClick={handleSendMessage} disabled={!message.trim()}>
                <SendIcon />
              </IconButton>
            ),
          }}
        />
      </DialogContent>
      <DialogActions>
        <Tabs value={tabValue} onChange={handleTabChange}>
          <Tab icon={<HomeIcon />} label="Home" />
          <Tab icon={<MessageIcon />} label="Messages" />
          <Tab icon={<HelpIcon />} label="Help" />
        </Tabs>
      </DialogActions>
    </Dialog>
  );
};

export default HelpCenter;