let allMyProjects = [

	//06.03.2023
    { title: "SplineCoaster", text: "Watch cars race on race track that was generated by extruding a spline curve.",
      tags: ["C++", "Mechanic"], image: "splineCoasterThumbnail", year: "2023",
      links: [
        {
          link: "https://phoenixofforce.dev/SplineCoaster/",
          icon: "material/web",
          alt: "Watch in Web"
        },
        {
          link: "https://github.com/PhoenixofForce/SplineCoaster",
          icon: "material/github",
          alt: "Source Code"
        }
      ],
    },

    //01.10.2022
    { title: "Speed Barber", text: "You play as the SpeedBarber who chose the busy travellers of the subway as his customers. Because they are so busy, you have to finish their requests in 10 seconds or less.",
      tags: ["C++", "Game", "GameJam", "Video Demo"], image: "speedbarber", year: "LD51",
      links: [
        {
          link: "https://ldjam.com/events/ludum-dare/51/speed-barber",
          icon: "material/web",
          alt: "LD Entry"
        },
        {
          link: "https://github.com/PhoenixofForce/Ludum_Dare_51",
          icon: "material/github",
          alt: "Source Code"
        },
        {
          link: "https://youtu.be/oMbwnkMXZZo",
          icon: "material/youtube",
          alt: "Gameplay Demo"
        },
      ],
    },

    //02.04.2022
    { title: "Dont Sleep", text: "A point and click game made in 48h with the current state of my engine. Tomorrow is the next DudumDare and you have to delay the inevitable sleep to see the theme as early as possible.",
      tags: ["Java", "Game", "GameJam", "Video Demo"], image: "DontSleep_Cover", year: "LD50",
      links: [
        {
          link: "https://ldjam.com/events/ludum-dare/50/dont-sleep",
          icon: "material/web",
          alt: "LD Entry"
        },
        {
          link: "https://github.com/PhoenixofForce/Ludum_Dare_50",
          icon: "material/github",
          alt: "Source Code"
        },
        {
          link: "https://youtu.be/jSAPulDrY1U",
          icon: "material/youtube",
          alt: "Gameplay Demo"
        },
      ],
    },

    //08.03.2022
    { title: "LWJGL Framework", text: "A work in progress game codebase written in Java and OpenGL.",
      tags: ["Java", "Game", "Video Demo"], image: "engine", year: "2022",
      links: [
        {
          link: "https://github.com/PhoenixofForce/LWJGL_Framework",
          icon: "material/github",
          alt: "Source Code"
        },
        {
          link: "https://youtu.be/v2VTF6WdH_E",
          icon: "material/youtube",
          alt: "Gameplay Demo"
        },
      ],
    },

    //31.10.2021
    { title: "0 Hour Game", text: "Turns out 2021 wasnt the last. So i made a game in 0 hours again. This time an easy endless runner where you have to jump over obstacles.",
      tags: ["Java", "GameJam", "Game"], image: "zero_game_2", year: "0h Jam 2021",
      links: [
        {
          link: "http://0hgame.eu/games.php?year=2021",
          icon: "material/web",
          alt: "Event Page"
        },
        {
          link: "https://github.com/PhoenixofForce/0HGameJam_21",
          icon: "material/github",
          alt: "Source Code"
        }
      ],
    },

    //24.04.21
    { title: "Chrono Jump", text: "A very short game for the 48 LD, which plays with the time. Travel back in time to open doors or change the position of moving platforms.",
      tags: ["Java", "Game", "GameJam"], image: "ld48", year: "LD48",
      links: [
        {
          link: "https://ldjam.com/events/ludum-dare/48/chronojump",
          icon: "material/web",
          alt: "LD Entry"
        },
        {
          link: "https://github.com/PhoenixofForce/Ludum_Dare_48",
          icon: "material/github",
          alt: "Source Code"
        }
      ],
    },

    //19.01.2021
    { title: "DnD Utils", text: "Want to roll some digital dice? Compare Spell damage? Then this site is for you.",
      tags: ["DND", "Svelte", "Web", "Tool"], image: "dnd_util", year: 2021,
      links: [
        {
          link: "https://phoenixofforce.github.io/DND_Utils/",
          icon: "material/web",
          alt: "Website"
        },
        {
          link: "https://github.com/PhoenixofForce/DND_Utils",
          icon: "material/github",
          alt: "Source Code"
        }
      ],
    },

    //29.12.20
    { title: "Dungeon Creator", text: "Create a custom Dungeon for your next session.",
      tags: ["DND", "Svelte", "Web", "Tool"], image: "dungeon_creator", year: 2020,
      links: [
        {
          link: "https://phoenixofforce.github.io/DungeonCreator/",
          icon: "material/web",
          alt: "Website"
        },
        {
          link: "https://github.com/PhoenixofForce/DungeonCreator",
          icon: "material/github",
          alt: "Source Code"
        }
      ],
    },

    //20.12.20
    { title: "Dungeon Viewer", text: "Host a game, share the link and watch your player struggle as you throw some dragons at them! This project no longer works as the host service I used discontinued its free plan. ",
      tags: ["DND", "Svelte", "Web", "Tool"], image: "dungeon_viewer_1", year: 2020,
      links: [
        {
          link: "https://phoenixofforce.github.io/Dungeon_Viewer/",
          icon: "material/web",
          alt: "Website"
        },
        {
          link: "https://github.com/PhoenixofForce/Dungeon_Viewer",
          icon: "material/github",
          alt: "Source Code"
        }
      ],
    },

    //06.11.20
    { title: "Entity Component System", text: "This is a test of an entity component system (ecs) featuring abilities, a moving platform, an enemy and a dash.",
      tags: ["Java", "Mechanic", "Game", "Video Demo"], image: "ecs", year: 2020,
      links: [
        {
          link: "https://github.com/PhoenixofForce/ECS_Test",
          icon: "material/github",
          alt: "Source Code"
        },
        {
          link: "https://youtu.be/3pnSehOTXQk",
          icon: "material/youtube",
          alt: "Gameplay Demo"
        },
      ],
    },

    //25.10.20
    { title: "0 Hour Game", text: "A Game made in 0 Hours, -40 Minutes. This game jam was (supposed to be) the last of its kind. Play my version of Space Invaders",
      tags: ["Java", "GameJam", "Game"], image: "zero_game", year: "0h Jam 2020",
      links: [
        {
          link: "http://0hgame.eu/games.php?year=2020",
          icon: "material/web",
          alt: "Event Page"
        },
        {
          link: "https://github.com/PhoenixofForce/0HGameJam",
          icon: "material/github",
          alt: "Source Code"
        }
      ],
    },

    //23.10.20
    { title: "LaTxT", text: "Write LaTxT-like code to create magnificent .txt files.",
      tags: ["Java", "Tool"], image: "", year: 2020,
      links: [
        {
          link: "https://github.com/PhoenixofForce/LaTxT",
          icon: "material/github",
          alt: "Source Code"
        }
      ],
    },

    //25.09.20
    { title: "Parser", text: "A parser for all sort of languages. Write your own language and compile the code in Java.",
      tags: ["Java"], image: "", year: 2020,
      links: [
        {
          link: "https://github.com/PhoenixofForce/Parser",
          icon: "material/github",
          alt: "Source Code"
        }
      ],
    },

    //26.04.2019
    { title: "Bloody Medic", text: "Dwelve into the Dungeon to rescue your villagers. But watch your health as your life is currency.",
      tags: ["GameJam", "Game", "Java"], image: "bloody_medic", year: "LD44",
      links: [
        {
          link: "https://ldjam.com/events/ludum-dare/44/bloody-medic",
          icon: "material/web",
          alt: "LD Entry"
        },
        {
          link: "https://github.com/Nottrex/LudumDare44",
          icon: "material/github",
          alt: "Source Code"
        }
      ],
    },

    //16.02.2019
    { title: "Dialogue System", text: "Dialogue System in the command line that uses tags, which are established in other projects of mine.",
      tags: ["Mechanic", "Java"], image: "", year: "2019",
      links: [
        {
          link: "https://github.com/PhoenixofForce/DialogueSystem",
          icon: "material/github",
          alt: "Source Code"
        }
      ],
    },

    //13.10.2018
    { title: "RayCast Scene", text: "This raycast scene renders 3D Prisms (objects with flat top and bottom) by sending rays from the player position in all directions.",
      tags: ["Mechanic", "Java", "Video Demo"], image: "raycast", year: "2018",
      links: [
        {
          link: "https://github.com/PhoenixofForce/RayCast-Scene",
          icon: "material/github",
          alt: "Source Code"
        },
        {
          link: "https://youtu.be/uu5uI9NeAL0",
          icon: "material/youtube",
          alt: "Gameplay Demo"
        },
      ],
    },

    //23.08.2018
    { title: "Triangulated Polygon Collision", text: "You can create polygons that get translated into a group of triangles. These triangles are used for collision testing with the Separating Axis Theorem.",
      tags: ["Mechanic", "Java", "Video Demo"], image: "axis", year: "2018",
      links: [
        {
          link: "https://github.com/PhoenixofForce/TriangulatedPolygonCollision",
          icon: "material/github",
          alt: "Source Code"
        },
        {
          link: "https://youtu.be/fTwLpqHtpE8",
          icon: "material/youtube",
          alt: "Gameplay Demo"
        },
      ],
    },

    //22.04.2018
    { title: "Clicker Defense", text: "Protect your Base from very unfriendly Slimes. Get resources to build powerful Towers.",
      tags: ["GameJam", "Game", "Java"], image: "clicker_defense", year: "LD41",
      links: [
        {
          link: "https://ldjam.com/events/ludum-dare/41/clickerdefense",
          icon: "material/web",
          alt: "LD Entry"
        },
        {
          link: "https://github.com/PhoenixofForce/LudumDare41",
          icon: "material/github",
          alt: "Source Code"
        }
      ],
    },

    //16.12.17
    { title: "Texture Packer", text: "A texture packer based on steering algorithms.",
      tags: ["Java", "Tool", "Video Demo"], image: "texture_packer", year: 2017,
      links: [
        {
          link: "https://github.com/PhoenixofForce/TexturePacker",
          icon: "material/github",
          alt: "Source Code"
        },
        {
          link: "https://youtu.be/nJZJ_yAq94o",
          icon: "material/youtube",
          alt: "Gameplay Demo"
        },
      ],
    },

    //05.12.17
    { title: "LevelEditor", text: "Import your spritesheet and start making levels for your game.",
      tags: ["Java", "Tool", "Video Demo"], image: "level_editor", year: 2017,
      links: [
        {
          link: "https://github.com/PhoenixofForce/Level_Editor",
          icon: "material/github",
          alt: "Source Code"
        },
        {
          link: "https://youtu.be/mzzermlVRTw",
          icon: "material/youtube",
          alt: "Gameplay Demo"
        },
      ],
    },

    { title: "Jump and Run", text: "Jump your way through multiple levels to collect all shiny coins.",
      tags: ["Game", "Java"], image: "jump_and_run", year: 2017,
      links: [
        {
          link: "https://github.com/Nottrex/JumpAndRun",
          icon: "material/github",
          alt: "Source Code"
        }
      ],
    },

    //24.08.17
    { title: "Tank My Bug", text: "In this buggy Shooter you can shoot your friends on the couch next to you.",
      tags: ["GameJam", "Game", "Java"], image: "tank_my_bug", year: "Kenney 1",
      links: [
        {
          link: "https://phoenixofforce.itch.io/tankmybug",
          icon: "material/web",
          alt: "Event Page"
        },
        {
          link: "https://github.com/PhoenixofForce/Kenney_Jam_1",
          icon: "material/github",
          alt: "Source Code"
        }
      ],
    },

    //29.07.17
    { title: "Lights Out", text: "An earthquake caused your lights to turn off. Find a way out of the building as long as you can!",
      tags: ["GameJam", "Game", "Java"], image: "Lights_Out", year: "LD39",
      links: [
        {
          link: "https://ldjam.com/events/ludum-dare/39/lightsout",
          icon: "material/web",
          alt: "LD Entry"
        },
        {
          link: "https://github.com/PhoenixofForce/Ludum_Dare_39",
          icon: "material/github",
          alt: "Source Code"
        }
      ],
    },

    //15.07.17
    { title: "My Lamp", text: "Jump across one screen full of enemies while you juggle your lamps fuel.",
      tags: ["GameJam", "Game", "Java"], image: "my_lamp", year: "GMTK 1",
      links: [
        {
          link: "https://phoenixofforce.itch.io/my-lamp",
          icon: "material/web",
          alt: "Event Page"
        },
        {
          link: "https://github.com/PhoenixofForce/GMTK_Jam",
          icon: "material/github",
          alt: "Source Code"
        }
      ],
    },

    //22.03.17
    { title: "Hex Game", text: "Blast of your enemies in this turn based stategy game.",
      tags: ["Game", "Java"], image: "hexgame_", year: 2017,
      links: [
        {
          link: "https://github.com/Nottrex/HexGame_",
          icon: "material/github",
          alt: "Source Code"
        }
      ],
    },
  ]