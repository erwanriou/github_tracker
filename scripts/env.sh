# ADD PRETTIER CONFIGS
echo "semi: false \ntrailingComma: \"none\" \narrowParens: \"avoid\"" > .prettierrc.yml

if
  [ ! -f config/keys_dev.js ]
then
  echo "config/keys_dev.js does not exists yet --> Creating..."
  # INPUT ENVS
  echo -n "::Enter MONGO_URI and press [ENTER]: "
  read MONGO_URI

  echo "const keys = {
    pipeline: {
      env: \"LOCAL\"
    },
    mongo: {
      url: \"$MONGO_URI\"
    }
  }

  exports.keys = keys
  " > config/keys_dev.js
else
  echo "config/keys_dev.js already exists --> No modifications apply"
fi
