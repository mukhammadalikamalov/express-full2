import AppBar from "@mui/material/AppBar";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import * as React from "react";
import { NavLink } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ButtonAppBar() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [profileModalOpen, setProfileModalOpen] = React.useState(false);
  const handleProfileModalOpen = () => setProfileModalOpen(true);
  const handleProfileModalClose = () => setProfileModalOpen(false);

  return (
    <Box>
      <AppBar
        position="fixed"
        sx={{
          bgcolor: "#fff",
          boxShadow: 0,
          color: "#000",
          borderBottom: "1px solid #f6f6fb",
          height: "78px",
          zIndex: 3,
          top: 0,
        }}
      >
        <Box
          sx={{
            gap: "60px",
            width: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <NavLink style={{ textDecoration: "none" }} to={"/"}>
            <Box>
              <img
                style={{ width: "200px", lineHeight: "44px", paddingLeft: "28px" }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr5xwqoVUsUDErUWcjlGijv6Klq5K8aJZTFQ&usqp=CAU"
                alt=""
              />
            </Box>
          </NavLink>
          <Box sx={{ display: "flex", gap: "20px", flex: 1 }}>
            <Box sx={{ display: "flex", gap: "8px", width: "450px" }}>
              <input
                style={{
                  width: "355.031px",
                  height: "48px",
                  borderRadius: "10px",
                  border: "1px solid #d1d1d6",
                  fontSize: "20px",
                  paddingLeft: "15px",
                }}
                type="text"
                placeholder="taom, tovar, oshxona va boshqalar"
              />
              <button
                style={{
                  height: "48px",
                  width: "83px",
                  borderRadius: "12px",
                  color: "black",
                  backgroundColor: "#fae100",
                  border: "none",
                  fontSize: "16px",
                  padding: "14px 16px",
                }}
              >
                Topish
              </button>
            </Box>

            <Button
              style={{
                width: "280px",
                height: "48px",
                backgroundColor: "#f6f6fb",
                color: "black",
                borderRadius: "10px",
                border: "1px solid #d1d1d6",
              }}
              onClick={handleOpen}
            >
              Toshkent, Yunusobod
            </Button>

            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              open={open}
              onClose={handleClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={open} style={{ height: "95%", width: "59.5%", borderRadius: "20px", border: "none" }}>
                <Box sx={{ ...style }}>
                  <h1 style={{ fontSize: "24px", paddingBottom: "20px" }}>Yetkazish Manzili</h1>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      padding: "8px",
                      height: "48px",
                      borderRadius: "10px",
                      marginBottom: "10px",
                      boxSizing: "border-box",
                      borderRadius: "10px",
                      border: "1px solid #d1d1d6",
                      color: "gray",
                    }}
                  />

                  <iframe
                    title="Google Maps"
                    width="100%"
                    height="70%"
                    frameBorder="0"
                    src="https://maps.google.com/maps?q=37.773972,-122.431297&z=15&output=embed"
                    style={{
                      marginTop: "10px",
                      paddingBottom: "20px",
                      borderRadius: "15px",
                    }}
                  />
                  <button
                    style={{
                      height: "48px",
                      width: "100%",
                      borderRadius: "12px",
                      color: "black",
                      backgroundColor: "#fae100",
                      border: "none",
                      fontSize: "16px",
                      padding: "14px 16px",
                    }}
                  >
                    Tasdiqlash
                  </button>
                </Box>
              </Fade>
            </Modal>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              height: "inherit",
            }}
          >
            <NavLink style={{ textDecoration: "none" }} to={"/"}>
              <Box
                sx={{
                  position: "relative",
                  color: "#8e8e93",
                  display: "flex",
                  cursor: "pointer",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "113px",
                  height: "78px",
                  borderLeft: "1px solid #f6f6fb",
                }}
              >
                O'zbekcha
              </Box>
            </NavLink>
            <Box
              sx={{
                position: "relative",
                color: "#8e8e93",
                display: "flex",
                cursor: "pointer",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "113px",
                height: "78px",
                borderLeft: "1px solid #f6f6fb",
              }}
            >
              <Button
                onClick={handleProfileModalOpen}
                sx={{
                  position: "relative",
                  color: "#8e8e93",
                  display: "flex",
                  cursor: "pointer",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "113px",
                  height: "78px",
                  borderLeft: "1px solid #f6f6fb",
                }}
              >
                Profil
              </Button>
              <Modal
                open={profileModalOpen}
                onClose={handleProfileModalClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  {/* You can add content here for the profile modal */}
                  <Button onClick={handleProfileModalClose}>Close</Button>
                </Box>
              </Modal>
            </Box>
          </Box>
        </Box>
      </AppBar>

      <Box component="main" sx={{ flexGrow: 1, marginTop: "10px", padding: "20px" }}></Box>
    </Box>
  );
}
